# Importar librerías y dependencias
import dash
from dash import dcc, html
from dash.dependencies import Input, Output, State
import plotly.express as px
import plotly.graph_objects as go
import pandas as pd
from fetch_waze_data import fetch_waze_data
from datetime import datetime
from collections import defaultdict
import math

# Diccionario de nombres de eventos
event_names = {
    'HAZARD_ON_ROAD_POT_HOLE': 'Baches en el camino',
    'ROAD_CLOSED_EVENT': 'Via cerrada',
    'HAZARD_ON_ROAD_CONSTRUCTION': 'Obras en la calzada',
    'JAM_HEAVY_TRAFFIC': 'Atasco tráfico pesado',
    'JAM_STAND_STILL_TRAFFIC': 'Atasco tráfico denso',
    'HAZARD_ON_SHOULDER_CAR_STOPPED': 'Vehículo detenido',
    'HAZARD_ON_ROAD': 'Peligro en calle',
    'HAZARD_ON_ROAD_TRAFFIC_LIGHT_FAULT': 'Falla de semáforo',
    'HAZARD_ON_ROAD_LANE_CLOSED': 'Carril cerrado',
    'HAZARD_ON_ROAD_OBJECT': 'Objeto en el camino',
    'ACCIDENT_MAJOR': 'Accidente grave'
}

# Inicializar la app de dash
app = dash.Dash(__name__)

# Layout de la aplicación
app.layout = html.Div([
    html.Div([
        html.H1('EVENTOS DE WAZE', style={'textAlign': 'center', 'fontFamily': 'Calibri'}),
        dcc.Interval(
            id='interval-component',
            interval=60*1000,  # actualiza cada minuto
            n_intervals=0
        ),
        html.Div(
            id='alerts-jams',
            style={'textAlign': 'center', 'border': '2px solid yellow', 'padding': '10px', 'margin': '10px 0'}
        ),
    ], style={'width': '100%', 'maxWidth': '1200px', 'margin': '0 auto'}),

    html.Div([
        html.Div([
            dcc.Graph(
                id='alerts-map',
                config={
                    'scrollZoom': True,
                    'displayModeBar': True,
                    'modeBarButtonsToAdd': ['zoom', 'pan', 'select', 'lasso2d']
                },
                style={'height': '600px', 'width': '100%'}
            )
        ], style={'width': '70%', 'display': 'inline-block', 'verticalAlign': 'top'}),
        html.Div([
            html.H3('Últimos 15 Eventos', style={'textAlign': 'center'}),
            html.Div(id='recent-events', style={'overflowY': 'auto', 'maxHeight': '600px'})
        ], style={'width': '28%', 'display': 'inline-block', 'verticalAlign': 'top', 'marginLeft': '2%'})
    ], style={'width': '100%', 'maxWidth': '1300px', 'margin': '0 auto'}),

    html.Div([
        dcc.Graph(id='alerts-by-type', style={'height': '400px'})
    ], style={'width': '100%', 'maxWidth': '1200px', 'margin': '20px auto'}),

    html.Div([
        html.Div(id='event-details', style={'width': '100%'})
    ], style={'width': '100%', 'maxWidth': '1400px', 'margin': '0 auto'}),

    dcc.Store(id='processed-data-store')
], style={
    'fontFamily': 'Calibri, Calibri',
    'margin': '0 auto',
    'padding': '20px',
    'maxWidth': '1400px',
    'backgroundColor': '#f0f0f0'
})

# Función para actualizar las alertas por tipo
def update_alerts_by_type_figure(processed_data):
    alerts_by_subtype = processed_data['alerts_by_type']
    sorted_subtypes = sorted(alerts_by_subtype.items(), key=lambda x: x[1], reverse=False)
    subtypes, counts = zip(*sorted_subtypes) if sorted_subtypes else ([], [])
    fig = px.bar(
        x=counts,
        y=subtypes,
        orientation='h',
        title='Alertas por Subtipo'
    )
    fig.update_layout(
        clickmode='event+select'
    )
    return fig

# Callback para actualizar el dashboard completo y manejar el click en el mapa
@app.callback(
    [Output('alerts-jams', 'children'),
     Output('alerts-map', 'figure'),
     Output('alerts-by-type', 'figure'),
     Output('event-details', 'children'),
     Output('recent-events', 'children'),
     Output('processed-data-store', 'data')],
    [Input('interval-component', 'n_intervals'),
     Input('alerts-map', 'clickData')]
)
def update_dashboard_and_isolate_legend_click(n_intervals, clickData):
    api_url = "https://www.waze.com/row-partnerhub-api/partners/11517520851/waze-feeds/4004dedf-0b87-4eed-b3f6-e0ad22fa5238?format=1"
    raw_data = fetch_waze_data(api_url)
    processed_data = process_waze_data(raw_data)
    
    alerts_jams = html.Div([
        html.H3(f"Total de Alertas: {processed_data['alerts']}"),
        html.H3(f"Total de Atascos: {processed_data['jams']}")
    ])
    
    df = pd.DataFrame(processed_data['alert_coordinates'])
    
    if not df.empty:
        center_lat = df['lat'].mean()
        center_lon = df['lon'].mean()
    
    alert_map = px.scatter_mapbox(df, 
                                  lat="lat", 
                                  lon="lon", 
                                  color="evento",  
                                  hover_name="street",
                                  hover_data={
                                      "evento": True,
                                      "lat": False,
                                      "lon": False
                                  },
                                  labels={"evento": "Evento"},
                                  zoom=11,
                                  center=dict(lat=center_lat, lon=center_lon),
                                  title="Mapa de Alertas")
    alert_map.update_traces(marker=dict(size=15))
    alert_map.update_layout(
        mapbox_style="open-street-map",
        height=600,
        margin=dict(l=0, r=0, t=50, b=0),
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=-0.1,
            xanchor="center",
            x=0.5
        ),
        dragmode='pan',
        hovermode='closest',
        clickmode='event+select'
    )
    
    if clickData:
        selected_event = clickData['points'][0]['curveNumber']
        filtered_df = df[df['evento'] == selected_event]
        if not filtered_df.empty:
            center_lat = filtered_df['lat'].mean()
            center_lon = filtered_df['lon'].mean()
            alert_map = px.scatter_mapbox(filtered_df, 
                                          lat="lat", 
                                          lon="lon", 
                                          color="evento",  
                                          hover_name="street",
                                          hover_data={
                                              "nearest_intersection": False,
                                              "evento": True,
                                              "lat": False,
                                              "lon": False
                                          },
                                          labels={"nearest_intersection": "Intersección más cercana", "evento": "Evento"},
                                          zoom=12,
                                          center=dict(lat=center_lat, lon=center_lon),
                                          title="Mapa de Alertas")
            alert_map.update_traces(marker=dict(size=15))
            alert_map.update_layout(
                mapbox_style="open-street-map",
                height=600,
                margin=dict(l=0, r=0, t=50, b=0),
                legend=dict(
                    orientation="h",
                    yanchor="bottom",
                    y=-0.1,
                    xanchor="center",
                    x=0.5
                ),
                dragmode='pan',
                hovermode='closest'
            )
    
    alerts_by_type = update_alerts_by_type_figure(processed_data)
    alerts_by_type.update_layout(height=400)
    
    event_details = create_event_details(processed_data)
    recent_events = create_recent_events(processed_data)
    
    return alerts_jams, alert_map, alerts_by_type, event_details, recent_events, processed_data

# Función para procesar los datos de Waze
def process_waze_data(raw_data):
    processed_data = {
        'alerts': 0,
        'jams': 0,
        'total_jam_length': 0,
        'alerts_by_type': {},
        'alert_details': defaultdict(list),
        'alert_coordinates': []
    }
    if 'alerts' in raw_data:
        processed_data['alerts'] = len(raw_data['alerts'])
        for alert in raw_data['alerts']:
            alert_type = alert.get('type', 'Unknown')
            subtype = alert.get('subtype', alert_type)
            
            alert_type = event_names.get(alert_type, alert_type)
            subtype = event_names.get(subtype, subtype)
            
            pubMillis = alert.get('pubMillis', 0)
            date_obj = datetime.fromtimestamp(pubMillis / 1000.0)
            date_str = date_obj.strftime('%d/%m %H:%M')
            
            street = alert.get('street', 'Calle desconocida')
            nearest_intersection = alert.get('nearBy', 'Intersección desconocida')
            
            if subtype not in processed_data['alerts_by_type']:
                processed_data['alerts_by_type'][subtype] = 0
            processed_data['alerts_by_type'][subtype] += 1
            
            processed_data['alert_details'][subtype].append({
                'date': date_str,
                'date_obj': date_obj,
                'location': alert.get('location', {}),
                'street': street,
                'nearest_intersection': nearest_intersection
            })
            
            if 'location' in alert and 'x' in alert['location'] and 'y' in alert['location']:
                processed_data['alert_coordinates'].append({
                    'lat': alert['location']['y'],
                    'lon': alert['location']['x'],
                    'evento': subtype,  # Cambiado de 'subtype' a 'evento'
                    'street': street,
                    'nearest_intersection': nearest_intersection
                })
    
    if 'jams' in raw_data:
        processed_data['jams'] = len(raw_data['jams'])
        processed_data['total_jam_length'] = sum(jam.get('length', 0) for jam in raw_data['jams'])
    return processed_data

# Función para crear un minimapa
def create_minimap(lat, lon, street=None, nearest_intersection=None):
    # Verifica si las coordenadas están disponibles
    if lat is None or lon is None:
        fig = go.Figure()
        fig.update_layout(
            title="Ubicación no disponible",
            height=300,
            width=300,
            margin=dict(l=0, r=0, t=0, b=0)
        )
        return fig
    else:
        # Prepara el texto que se mostrará en el hover
        hover_text = f'Ubicación del incidente'
        if street:
            hover_text += f'<br>Calle: {street}'
        
        fig = go.Figure(go.Scattermapbox(
            lat=[lat],
            lon=[lon],
            mode='markers',
            marker=go.scattermapbox.Marker(size=15, color='red'),
            text=[hover_text],
            hoverinfo='text'
        ))
        
        fig.update_layout(
            mapbox=dict(
                style="open-street-map",
                center=dict(lat=lat, lon=lon),
                zoom=15
            ),
            showlegend=False,
            height=300,
            width=300,
            margin=dict(l=0, r=0, t=0, b=0)
        )
        return fig

# Función para crear los detalles del evento
def create_event_details(processed_data):
    event_columns = []
    priority_subtypes = [
        "Via cerrada",
        "Obras en la calzada",
        "Baches en el camino",
        "Falla de semáforo"
    ]
    
    def create_event_column(subtype, alerts, is_priority=False):
        sorted_alerts = sorted(alerts, key=lambda x: x['date_obj'], reverse=True)
        total_pages = math.ceil(len(sorted_alerts) / 10)
        
        alert_items = []
        for i, alert in enumerate(sorted_alerts[:10]):
            short_date = alert['date_obj'].strftime('%d/%m %H:%M')
            alert_items.append(
                html.Div([
                    html.Button(
                        f"{short_date} - {alert['street']}",
                        id={'type': 'alert-button', 'index': f"{subtype}-{i}"},
                        style={'display': 'block', 'marginBottom': '5px', 'width': '100%', 'textAlign': 'left', 'overflow': 'hidden', 'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap'}
                    ),
                    html.Div(id={'type': 'alert-minimap', 'index': f"{subtype}-{i}"}, style={'display': 'none'})
                ])
            )
        
        pagination = html.Div([
            html.Button("Anterior", id={'type': 'prev-button', 'subtype': subtype}, disabled=True),
            html.Span(id={'type': 'page-display', 'subtype': subtype}, children="Página 1 de {}".format(total_pages)),
            html.Button("Siguiente", id={'type': 'next-button', 'subtype': subtype}, disabled=total_pages <= 1)
        ], style={'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginTop': '10px'})
        
        background_color = 'lightyellow' if is_priority else 'white'
        
        return html.Div([
            html.H3(subtype, style={'fontSize': '1rem', 'marginBottom': '5px'}),
            html.Div(alert_items, id={'type': 'alert-container', 'subtype': subtype}),
            pagination,
            dcc.Store(id={'type': 'page-store', 'subtype': subtype}, data={'current_page': 1, 'total_pages': total_pages})
        ], style={'width': '24%', 'margin': '0.5%', 'backgroundColor': background_color, 'padding': '10px', 'boxSizing': 'border-box', 'display': 'inline-block', 'verticalAlign': 'top'})

    # Primero, agregar las columnas prioritarias
    for subtype in priority_subtypes:
        if subtype in processed_data['alert_details']:
            event_columns.append(create_event_column(subtype, processed_data['alert_details'][subtype], is_priority=True))
    
    # Luego, agregar el resto de las columnas
    for subtype, alerts in processed_data['alert_details'].items():
        if subtype not in priority_subtypes:
            event_columns.append(create_event_column(subtype, alerts))
    
    return html.Div(event_columns, style={'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'flex-start'})

# Callback para la paginación de eventos
@app.callback(
    [Output({'type': 'alert-container', 'subtype': dash.MATCH}, 'children'),
     Output({'type': 'page-display', 'subtype': dash.MATCH}, 'children'),
     Output({'type': 'prev-button', 'subtype': dash.MATCH}, 'disabled'),
     Output({'type': 'next-button', 'subtype': dash.MATCH}, 'disabled'),
     Output({'type': 'page-store', 'subtype': dash.MATCH}, 'data')],
    [Input({'type': 'prev-button', 'subtype': dash.MATCH}, 'n_clicks'),
     Input({'type': 'next-button', 'subtype': dash.MATCH}, 'n_clicks')],
    [State({'type': 'page-store', 'subtype': dash.MATCH}, 'data'),
     State({'type': 'prev-button', 'subtype': dash.MATCH}, 'id'),
     State('processed-data-store', 'data')]
)
def update_page(prev_clicks, next_clicks, page_data, button_id, processed_data):
    ctx = dash.callback_context
    if not ctx.triggered:
        return dash.no_update, dash.no_update, dash.no_update, dash.no_update, dash.no_update
    
    button_id = ctx.triggered[0]['prop_id'].split('.')[0]
    action = eval(button_id)['type']
    subtype = eval(button_id)['subtype']
    
    current_page = page_data['current_page']
    total_pages = page_data['total_pages']
    
    if action == 'prev-button' and current_page > 1:
        current_page -= 1
    elif action == 'next-button' and current_page < total_pages:
        current_page += 1
    
    if processed_data and 'alert_details' in processed_data:
        if subtype in processed_data['alert_details']:
            sorted_alerts = sorted(processed_data['alert_details'][subtype], key=lambda x: x['date_obj'], reverse=True)
            start = (current_page - 1) * 10
            end = start + 10
            page_alerts = sorted_alerts[start:end]
            
            alert_items = []
            for i, alert in enumerate(page_alerts):
                alert_items.append(
                    html.Div([
                        html.Button(
                            f"{alert['date']} - {alert['street']}",
                            id={'type': 'alert-button', 'index': f"{subtype}-{start+i}"},
                            style={'display': 'block', 'marginBottom': '5px', 'width': '100%'}
                        ),
                        html.Div(id={'type': 'alert-minimap', 'index': f"{subtype}-{start+i}"}, style={'display': 'none'})
                    ])
                )
            
            page_display = f"Página {current_page} de {total_pages}"
            prev_disabled = current_page == 1
            next_disabled = current_page == total_pages
            
            return alert_items, page_display, prev_disabled, next_disabled, {'current_page': current_page, 'total_pages': total_pages}
    
    return [], f"Página {current_page} de {total_pages}", True, True, page_data

# Callback para alternar la visibilidad de los minimapas de alertas
@app.callback(
    [Output({'type': 'alert-minimap', 'index': dash.MATCH}, 'children'),
     Output({'type': 'alert-minimap', 'index': dash.MATCH}, 'style')],
    [Input({'type': 'alert-button', 'index': dash.MATCH}, 'n_clicks')],
    [State({'type': 'alert-minimap', 'index': dash.MATCH}, 'style'),
     State({'type': 'alert-button', 'index': dash.MATCH}, 'id'),
     State('processed-data-store', 'data')]
)
def toggle_minimap(n_clicks, current_style, button_id, processed_data):
    if n_clicks is None:
        return dash.no_update, dash.no_update
    
    subtype, index = button_id['index'].split('-')
    index = int(index)
    
    if processed_data and 'alert_details' in processed_data:
        if subtype in processed_data['alert_details']:
            sorted_alerts = sorted(processed_data['alert_details'][subtype], key=lambda x: x['date_obj'], reverse=True)
            if index < len(sorted_alerts):
                alert = sorted_alerts[index]
                lat, lon = extract_coordinates(alert['location'])
                street = alert['street']
                minimap = dcc.Graph(figure=create_minimap(lat, lon, street), style={'height': '200px', 'width': '100%'})
                
                new_style = {'display': 'block'} if current_style.get('display') == 'none' else {'display': 'none'}
                return minimap, new_style
    
    return "No se pudo cargar el mapa", {'display': 'none'}

# Callback para alternar la visibilidad de los minimapas de eventos recientes
@app.callback(
    [Output({'type': 'recent-event-minimap', 'index': dash.MATCH}, 'children'),
     Output({'type': 'recent-event-minimap', 'index': dash.MATCH}, 'style')],
    [Input({'type': 'recent-event-button', 'index': dash.MATCH}, 'n_clicks')],
    [State({'type': 'recent-event-minimap', 'index': dash.MATCH}, 'style'),
     State({'type': 'recent-event-button', 'index': dash.MATCH}, 'id'),
     State('processed-data-store', 'data')]
)
def toggle_recent_event_minimap(n_clicks, current_style, button_id, processed_data):
    if n_clicks is None:
        return dash.no_update, dash.no_update
    
    index = button_id['index']
    
    all_events = []
    for subtype, alerts in processed_data['alert_details'].items():
        for alert in alerts:
            all_events.append({**alert, 'subtype': subtype})
    
    sorted_events = sorted(all_events, key=lambda x: x['date_obj'], reverse=True)[:15]
    
    if index < len(sorted_events):
        event = sorted_events[index]
        lat, lon = extract_coordinates(event['location'])
        street = event['street']
        minimap = dcc.Graph(figure=create_minimap(lat, lon, street), style={'height': '200px', 'width': '100%'})
        
        new_style = {'display': 'block'} if current_style.get('display') == 'none' else {'display': 'none'}
        return minimap, new_style
    
    return "No se pudo cargar el mapa", {'display': 'none'}

# Callback para aislar el clic en la leyenda del mapa de alertas
#@app.callback(
    #Output('alerts-map', 'figure'),
   # [Input('alerts-map', 'clickData')],
   # [State('processed-data-store', 'data')]

def isolate_legend_click(clickData, processed_data):
    if not clickData:
        return dash.no_update
    
    selected_event = clickData['points'][0]['curveNumber']
    
    df = pd.DataFrame(processed_data['alert_coordinates'])
    
    filtered_df = df[df['evento'] == selected_event]
    
    if not filtered_df.empty:
        center_lat = filtered_df['lat'].mean()
        center_lon = filtered_df['lon'].mean()
    
    alert_map = px.scatter_mapbox(filtered_df, 
                                  lat="lat", 
                                  lon="lon", 
                                  color="evento",  
                                  hover_name="street",
                                  hover_data={
                                      "nearest_intersection": False,
                                      "evento": True,
                                      "lat": False,
                                      "lon": False
                                  },
                                  labels={"nearest_intersection": "Intersección más cercana", "evento": "Evento"},
                                  zoom=12,
                                  center=dict(lat=center_lat, lon=center_lon),
                                  title="Mapa de Alertas")
    alert_map.update_traces(marker=dict(size=15))
    alert_map.update_layout(
        mapbox_style="open-street-map",
        height=600,
        margin=dict(l=0, r=0, t=50, b=0),
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=-0.1,
            xanchor="center",
            x=0.5
        ),
        dragmode='pan',
        hovermode='closest'
    )

    return alert_map

# Función para extraer coordenadas de la ubicación
def extract_coordinates(location):
    if isinstance(location, dict):
        lon = location.get('x', None)
        lat = location.get('y', None)
        if lon is not None and lat is not None:
            return lat, lon
    elif isinstance(location, str):
        try:
            parts = location.split(', ')
            lat_part = parts[0].split(': ')[1]
            lon_part = parts[1].split(': ')[1]
            return float(lat_part), float(lon_part)
        except (IndexError, ValueError):
            print(f"Error al procesar la cadena de ubicación: {location}")
    print(f"Formato de location no esperado o coordenadas no disponibles: {location}")
    return None, None

# Función para crear eventos recientes
def create_recent_events(processed_data):
    all_events = []
    for subtype, alerts in processed_data['alert_details'].items():
        for alert in alerts:
            all_events.append({**alert, 'subtype': subtype})
    
    sorted_events = sorted(all_events, key=lambda x: x['date_obj'], reverse=True)[:15]
    
    event_items = []
    for i, event in enumerate(sorted_events):
        short_date = event['date_obj'].strftime('%d/%m %H:%M')  # Formato de fecha corta
        event_items.append(
            html.Div([
                html.Button(
                    f"{event['subtype']} - {short_date} - {event['street']}",
                    id={'type': 'recent-event-button', 'index': i},
                    style={'display': 'block', 'marginBottom': '5px', 'width': '100%', 'textAlign': 'left'}
                ),
                html.Div(id={'type': 'recent-event-minimap', 'index': i}, style={'display': 'none'})
            ])
        )
    
    return event_items

if __name__ == '__main__':
    app.run_server(debug=True)