import sys
print("Python version:", sys.version)

try:
    import pandas as pd
    print("Pandas version:", pd.__version__)
except ImportError:
    print("Error: Pandas is not installed")

try:
    import plotly
    print("Plotly version:", plotly.__version__)
except ImportError:
    print("Error: Plotly is not installed")

import sys
import os
import dash
import plotly.express as px
import plotly.graph_objects as go
import math
import threading
import time
from dash import html, dcc
from dash.dependencies import Input, Output, State
from datetime import datetime
from collections import defaultdict
import pytz
import json
from fetch_waze_data import fetch_waze_data, process_waze_data
import requests

# Definimos la zona horaria de Buenos Aires
buenos_aires_tz = pytz.timezone('America/Argentina/Buenos_Aires')

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


# Definimos la zona horaria de Buenos Aires
buenos_aires_tz = pytz.timezone('America/Argentina/Buenos_Aires')

# Función para obtener datos de la API de Waze
def fetch_waze_data(api_url):
    response = requests.get(api_url)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error al obtener datos de Waze: {response.status_code}")
        return {}

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
            subtype = event_names.get(subtype, subtype)  # Traducir nombre del evento
            
            pubMillis = alert.get('pubMillis', 0)
            date_obj = datetime.fromtimestamp(pubMillis / 1000.0, tz=pytz.UTC).astimezone(buenos_aires_tz)
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
                    'evento': subtype,
                    'street': street,
                    'nearest_intersection': nearest_intersection
                })

    if 'jams' in raw_data:
        processed_data['jams'] = len(raw_data['jams'])
        processed_data['total_jam_length'] = sum(jam.get('length', 0) for jam in raw_data['jams'])

    return processed_data

# Función para convertir JSON a GeoJSON
def convert_json_to_geojson(input_file, output_file):
    try:
        with open(input_file, 'r') as json_file:
            data = json.load(json_file)
        
        geojson_data = {
            "type": "FeatureCollection",
            "features": []
        }

        # Asumiendo que 'data' es una lista de coordenadas de eventos
        for event in data:
            feature = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [event['lon'], event['lat']]  # Asegúrate de que las claves sean correctas
                },
                "properties": {
                    "evento": event['evento'],
                    "street": event['street'],
                    "nearest_intersection": event['nearest_intersection']
                }
            }
            geojson_data["features"].append(feature)

        # Guardar el archivo GeoJSON
        with open(output_file, 'w') as geojson_file:
            json.dump(geojson_data, geojson_file, indent=4)
        print(f"GeoJSON guardado correctamente en {output_file}")

    except Exception as e:
        print(f"Error al convertir JSON a GeoJSON: {e}")

# Función para actualizar los eventos
def update_events():
    print(f"[{datetime.now()}] Ejecutando actualización de eventos...")
    api_url = "https://www.waze.com/row-partnerhub-api/partners/11517520851/waze-feeds/4004dedf-0b87-4eed-b3f6-e0ad22fa5238?format=1"
    raw_data = fetch_waze_data(api_url)
    raw_data['alerts'] = [
        alert for alert in raw_data.get('alerts', [])
        if alert.get('reportRating', 0) >= 4 and alert.get('type')
    ]
    processed_data = process_waze_data(raw_data)

    # Guardar eventos en un archivo JSON
    output_path = os.path.join(os.getcwd(), 'assets', 'resources', 'eventos.json')
    try:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w') as json_file:
            json.dump(processed_data['alert_coordinates'], json_file)
        print(f"[{datetime.now()}] Archivo eventos.json guardado en {output_path}")

        # Convertir a GeoJSON
        geojson_output_path = os.path.join(os.getcwd(), 'assets', 'resources', 'eventos_geojson.json')
        convert_json_to_geojson(output_path, geojson_output_path)

    except Exception as e:
        print(f"Error al guardar eventos.json: {e}")

# Función para manejar actualizaciones en segundo plano
def run_background_update():
    while True:
        update_events()
        time.sleep(600)  # Actualiza cada 10 minutos

# Crear y arrancar el hilo de actualización en segundo plano
update_thread = threading.Thread(target=run_background_update, daemon=True)
update_thread.start()

# Inicializar la app de Dash
app = dash.Dash(__name__)

app.index_string = """
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Waze Dashboard</title>
        {%metas%}
        {%favicon%}
        {%css%}
    </head>
    <body>
        <div id="react-root">
            {%app_entry%}
        </div>
        {%config%}
        {%scripts%}
        {%renderer%}
        
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vega@5.20.2/build/vega.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vega-lite@5.6.0/build/vega-lite.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.20.2"></script>
        <script src="/assets/local_storage_handler.js"></script>

        <script>
    if (!window.dash_clientside) {
        window.dash_clientside = {};
    }
    window.dash_clientside.clientside = {
        update_button_style: function(n_clicks, id) {
            var button = document.getElementById(JSON.stringify(id));
            if (button.dataset.initialLoad) {
                delete button.dataset.initialLoad;
                var state = loadButtonState(JSON.stringify(id));
                if (state === 'clicked') {
                    button.style.backgroundColor = 'lightblue';
                }
            } else if (n_clicks) {
                saveButtonState(JSON.stringify(id), 'clicked');
                button.style.backgroundColor = 'lightblue';
            }
            return window.dash_clientside.no_update;
        }
    };
</script>

    </body>
</html>
"""

# Layout de la aplicación
app.layout = html.Div([
    html.Div([
        html.Div([
            html.H1('EVENTOS DE WAZE', style={
                'textAlign': 'mid-center', 
                'fontFamily': 'Calibri', 
                'fontSize': '28px', 
                'fontWeight': 'bold', 
                'flex': '1',
                'margin': '0'
            }),
            html.Img(src='/assets/waze_logo.png', style={
                'height': '80px',
                'marginLeft': 'auto'
            })
        ], style={
            'display': 'flex', 
            'alignItems': 'center', 
            'width': '100%',
            'maxWidth': '1200px',
            'margin': '0 auto'
        }),
        dcc.Interval(
            id='interval-component',
            interval=10*60*1000,  # Actualiza cada 10 minutos
            n_intervals=0
        ),
        html.Div(
            id='alerts-jams',
            style={
                'textAlign': 'center', 
                'border': '2px solid yellow', 
                'padding': '10px', 
                'margin': '10px 0', 
                'fontSize': '18px',
                'fontFamily': 'Calibri'
            }
        ),
    ], style={'width': '100%', 'maxWidth': '900px', 'margin': '0 auto'}),

    html.Div([
    html.Button(
        "ACTUALIZAR EVENTOS",
        id="update-button",
        style={
            'margin': '10px',
            'padding': '10px 20px',
            'fontSize': '16px',
            'backgroundColor': '#4CAF50',
            'color': 'white',
            'border': 'none',
            'cursor': 'pointer',
            'borderRadius': '5px'
        }
    ),
    html.Div(id='update-status', style={'marginTop': '10px', 'color': 'green'})
    ]),

    html.Div([
        html.Div([
            html.Iframe(
                src='/assets/mapaqgis.html',
                style={'height': '800px', 'width': '100%', 'border': 'none'}
            )
        ], style={'width': '100%', 'marginBottom': '20px'}),
        
        html.Div([
            html.H3('Últimos 15 Eventos', style={'textAlign': 'center'}),
            html.Div(id='recent-events', style={
                'overflowY': 'auto', 
                'maxHeight': '400px', 
                'border': '1px solid #ccc', 
                'padding': '10px'
            })
        ], style={'width': '100%', 'margin': '0 auto'})
    ], style={'width': '100%', 'maxWidth': '1300px', 'margin': '0 auto'}),
    
    html.Div([
        html.Div(id='event-details', style={'width': '100%'})
    ], style={'width': '100%', 'maxWidth': '1400px', 'margin': '0 auto'}),

    html.Div([
        dcc.Graph(id='alerts-by-type', style={'height': '400px'})
    ], style={'width': '100%', 'maxWidth': '1200px', 'margin': '20px auto'}),

    html.Div(id='event-info', style={'textAlign': 'center', 'padding': '10px', 'border': '1px solid #ddd', 'marginTop': '20px'}),
    

    dcc.Store(id='processed-data-store'),
    dcc.Store(id='clicked-buttons', data=[]),
    html.Div(id='dummy-output')
],  
style={
    'fontFamily': 'Roboto, Calibri',
    'margin': '0 auto',
    'padding': '10px',
    'maxWidth': '1400px',
    'backgroundColor': '#e0e0e0'
})

@app.callback(
    Output('update-status', 'children'),
    [Input('update-button', 'n_clicks')]
)
def force_update(n_clicks):
    if n_clicks:
        try:
            update_events()
            return f"Eventos actualizados exitosamente a las {datetime.now().strftime('%H:%M:%S')}."
        except Exception as e:
            return f"Error al actualizar los eventos: {str(e)}"
    return ""


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

@app.callback(
    Output('event-info', 'children'),
    [Input('alerts-by-type', 'clickData')],
    [State('processed-data-store', 'data')]
)
def display_event_info(clickData, processed_data):
    if not clickData or not processed_data:
        return "Haz clic en un evento en el mapa para ver los detalles."

    # Extraer el evento seleccionado basado en el índice
    selected_event_index = clickData['points'][0]['pointIndex']
    event_info = processed_data['alert_coordinates'][selected_event_index]

    # Obtener datos relevantes del evento seleccionado
    evento = event_info.get('evento', 'Evento desconocido')
    street = event_info.get('street', 'Calle desconocida')
    nearest_intersection = event_info.get('nearest_intersection', 'Intersección desconocida')

    # Crear el texto a mostrar en el layout
    return html.Div([
        html.H4(f"Evento: {evento}"),
        html.P(f"Calle: {street}"),
        html.P(f"Intersección más cercana: {nearest_intersection}")
    ], style={'padding': '10px', 'backgroundColor': '#f9f9f9', 'borderRadius': '5px'})


# Callback para actualizar el dashboard completo y manejar el click en el mapa
@app.callback(
    [Output('alerts-jams', 'children'),
     Output('alerts-by-type', 'figure'),
     Output('event-details', 'children'),
     Output('recent-events', 'children'),
     Output('processed-data-store', 'data')],
    [Input('interval-component', 'n_intervals')]
)
def update_dashboard_and_isolate_legend_click(n_intervals):
    api_url = "https://www.waze.com/row-partnerhub-api/partners/11517520851/waze-feeds/4004dedf-0b87-4eed-b3f6-e0ad22fa5238?format=1"
    raw_data = fetch_waze_data(api_url)
    raw_data['alerts'] = [
    alert for alert in raw_data.get('alerts', [])
    if alert.get('reportRating', 0) >= 4 and alert.get('type')  # reportRating >= 4 y tiene un 'type'
]
    processed_data = process_waze_data(raw_data)

    # Resto del código del callback
    alerts_jams = html.Div([
        html.H3(f"Total de Alertas: {processed_data['alerts']}"),
        html.H3(f"Total de Atascos: {processed_data['jams']}")
    ])
 
    df = pd.DataFrame(processed_data['alert_coordinates'])
    if not df.empty:
        center_lat = df['lat'].mean()
        center_lon = df['lon'].mean()
    # Creación del mapa de alertas utilizando capas GeoJSON o imagen completa
    alert_map = px.scatter_mapbox(
        df,
        lat="lat",
        lon="lon",
        color="evento",
        hover_name="street",
        hover_data={"evento": True, "lat": False, "lon": False},
        labels={"evento": "Evento"},
        zoom=11,
        center=dict(lat=center_lat, lon=center_lon),
        title="Mapa de Alertas"
    )
    alert_map.update_traces(marker=dict(size=15))

    # Configura una capa de imagen o recurso HTML como fondo del mapa
    alert_map.update_layout(
        mapbox=dict(
            style="white-bg",  # Fondo blanco básico
            layers=[
                dict(
                    sourcetype="image",  # Tipo de fuente: imagen
                    source="/assets/qgis_map/resources/qgis_background.png",  # Asegúrate de tener esta imagen como fondo
                    coordinates=[[-58.5, -34.7], [-58.3, -34.7], [-58.3, -34.5], [-58.5, -34.5]],  # Ajusta las coordenadas de tu mapa
                    below="traces"
                )
            ]
        ),
        height=600,
        margin=dict(l=0, r=0, t=50, b=0),
        legend=dict(orientation="h", yanchor="bottom", y=-0.1, xanchor="center", x=0.5),
        dragmode='pan',
        hovermode='closest',
        clickmode='event+select'
    )

    alerts_by_type = update_alerts_by_type_figure(processed_data)
    event_details = create_event_details(processed_data)
    recent_events = create_recent_events(processed_data)
    
    return alerts_jams, alerts_by_type, event_details, recent_events, processed_data

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

            # Saltar eventos sin un tipo o subtipo válido
            if not alert_type and not subtype:
                continue
            
            alert_type = event_names.get(alert_type, alert_type)
            subtype = event_names.get(subtype, subtype)
            
            pubMillis = alert.get('pubMillis', 0)
            # Convertimos la fecha a la zona horaria de Buenos Aires
            date_obj = datetime.fromtimestamp(pubMillis / 1000.0, tz=pytz.UTC).astimezone(buenos_aires_tz)
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
                    'evento': subtype,
                    'street': street,
                    'nearest_intersection': nearest_intersection
                })
    
    if 'jams' in raw_data:
        processed_data['jams'] = len(raw_data['jams'])
        processed_data['total_jam_length'] = sum(jam.get('length', 0) for jam in raw_data['jams'])
    return processed_data


# Función para crear un minimapa
def create_minimap(lat, lon, street=None, nearest_intersection=None, evento=None, date=None):
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
        # Preparamos el texto que se mostrará en el hover
        hover_text = f'Evento: {evento}<br>'
        if street:
            hover_text += f'Calle: {street}<br>'
        if nearest_intersection:
            hover_text += f'Intersección más cercana: {nearest_intersection}<br>'
        if date:
            hover_text += f'Fecha: {date}'
        
        fig = go.Figure(go.Scattermapbox(
            lat=[lat],
            lon=[lon],
            mode='markers',
            marker=go.scattermapbox.Marker(
                size=15,
                color='red',
                symbol='circle'
            ),
            text=[hover_text],
            hoverinfo='text'
        ))
        
        fig.update_layout(
            mapbox=dict(
                style="open-street-map",
                center=dict(lat=lat, lon=lon),
                zoom=15,
                uirevision='no_reset'  # Mantiene el estado del mapa entre actualizaciones
            ),
            showlegend=False,
            height=300,
            width=300,
            margin=dict(l=0, r=0, t=0, b=0),
            paper_bgcolor='white',  # Fondo blanco del contenedor
            plot_bgcolor='white'    # Fondo blanco del área de trazado
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
        alert_items = []  # Inicializar la lista aquí
        sorted_alerts = sorted(alerts, key=lambda x: x['date_obj'], reverse=True)
        total_pages = math.ceil(len(sorted_alerts) / 10)
        
        for i, alert in enumerate(sorted_alerts[:10]):  # Procesar solo las primeras 10 alertas
            short_date = alert['date_obj'].strftime('%d/%m %H:%M')
            alert_items.append(
                html.Div([
                    html.Button(
                        f"{short_date} - {alert['street']}",
                        id={'type': 'alert-button', 'index': f"{subtype}-{i}"},
                        style={
                            'display': 'block',
                            'marginBottom': '5px',
                            'width': '100%',
                            'textAlign': 'left',
                            'overflow': 'hidden',
                            'textOverflow': 'ellipsis',
                            'whiteSpace': 'nowrap',
                            'borderRadius': '15px',
                            'fontFamily': '"Roboto", sans-serif',
                            'border': 'none',
                            'padding': '10px',
                            'transition': 'background-color 0.3s'
                        }
                    ),
                    html.Div(id={'type': 'alert-minimap', 'index': f"{subtype}-{i}"}, style={'display': 'none'})
                ])
            )
        
        pagination = html.Div([
            html.Button("Anterior", id={'type': 'prev-button', 'subtype': subtype}, disabled=True),
            html.Span(id={'type': 'page-display', 'subtype': subtype}, children=f"Página 1 de {total_pages}"),
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
     State('processed-data-store', 'data'),
     State({'type': 'alert-container', 'subtype': dash.MATCH}, 'children')]
)
def update_page(prev_clicks, next_clicks, page_data, button_id, processed_data, current_children):
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
                # Buscar el estilo existente del botón si existe
                existing_style = {}
                for child in current_children:
                    if child['props']['children'][0]['props']['id']['index'] == f"{subtype}-{start+i}":
                        existing_style = child['props']['children'][0]['props']['style']
                        break
                
                alert_items.append(
                    html.Div([
                        html.Button(
                            f"{alert['date']} - {alert['street']}",
                            id={'type': 'alert-button', 'index': f"{subtype}-{start+i}"},
                            style=existing_style or {
                                'display': 'block',
                                'marginBottom': '5px',
                                'width': '100%',
                                'textAlign': 'left',
                                'overflow': 'hidden',
                                'textOverflow': 'ellipsis',
                                'whiteSpace': 'nowrap',
                                'borderRadius': '15px',
                                'fontFamily': '"Roboto", sans-serif',
                                'border': 'none',
                                'padding': '10px',
                                'transition': 'background-color 0.3s'
                            }
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
     Output({'type': 'alert-minimap', 'index': dash.MATCH}, 'style'),
     Output({'type': 'alert-button', 'index': dash.MATCH}, 'style')],
    [Input({'type': 'alert-button', 'index': dash.MATCH}, 'n_clicks')],
    [State({'type': 'alert-minimap', 'index': dash.MATCH}, 'style'),
     State({'type': 'alert-button', 'index': dash.MATCH}, 'id'),
     State({'type': 'alert-button', 'index': dash.MATCH}, 'style'),
     State('processed-data-store', 'data')]
)
def toggle_minimap(n_clicks, current_style, button_id, current_button_style, processed_data):
    if n_clicks is None:
        return dash.no_update, dash.no_update, dash.no_update

    subtype, index = button_id['index'].split('-')
    index = int(index)

    if processed_data and 'alert_details' in processed_data:
        if subtype in processed_data['alert_details']:
            sorted_alerts = sorted(processed_data['alert_details'][subtype], key=lambda x: x['date_obj'], reverse=True)
            if index < len(sorted_alerts):
                alert = sorted_alerts[index]
                lat, lon = extract_coordinates(alert['location'])
                street = alert['street']
                nearest_intersection = alert.get('nearest_intersection', 'No disponible')
                date = alert['date']
                
                # Crear el minimapa con un contenedor específico
                minimap_container = html.Div([
                    dcc.Graph(
                        figure=create_minimap(lat, lon, street, nearest_intersection, subtype, date),
                        config={'displayModeBar': False},  # Ocultar la barra de herramientas
                        style={
                            'height': '300px',
                            'width': '100%',
                            'backgroundColor': 'white',
                            'border': '1px solid #ddd',
                            'borderRadius': '4px',
                            'padding': '4px'
                        }
                    )
                ], style={'marginTop': '10px'})

                new_style = {'display': 'block'} if current_style.get('display') == 'none' else {'display': 'none'}
                new_button_style = dict(current_button_style)
                new_button_style['backgroundColor'] = 'lightblue'

                return minimap_container, new_style, new_button_style

    return "No se pudo cargar el mapa", {'display': 'none'}, current_button_style

@app.callback(
    [Output({'type': 'recent-event-minimap', 'index': dash.MATCH}, 'children'),
     Output({'type': 'recent-event-minimap', 'index': dash.MATCH}, 'style'),
     Output({'type': 'recent-event-button', 'index': dash.MATCH}, 'style')],
    [Input({'type': 'recent-event-button', 'index': dash.MATCH}, 'n_clicks')],
    [State({'type': 'recent-event-minimap', 'index': dash.MATCH}, 'style'),
     State({'type': 'recent-event-button', 'index': dash.MATCH}, 'id'),
     State({'type': 'recent-event-button', 'index': dash.MATCH}, 'style'),
     State('processed-data-store', 'data')]
)
def toggle_recent_event_minimap(n_clicks, current_style, button_id, current_button_style, processed_data):
    if n_clicks is None:
        return dash.no_update, dash.no_update, dash.no_update
    
    index = button_id['index']
    
    all_events = []
    for subtype, alerts in processed_data['alert_details'].items():
        for alert in alerts:
            all_events.append({**alert, 'subtype': subtype})
    
    sorted_events = sorted(all_events, key=lambda x: x['date_obj'], reverse=True)[:15]
    
    if int(index) < len(sorted_events):
        event = sorted_events[int(index)]
        lat, lon = extract_coordinates(event['location'])
        street = event['street']
        nearest_intersection = event.get('nearest_intersection', 'No disponible')
        date = event['date']
        minimap = dcc.Graph(figure=create_minimap(lat, lon, street, nearest_intersection, event['subtype'], date), 
                           style={'height': '200px', 'width': '100%'})
        
        new_style = {'display': 'block'} if current_style.get('display') == 'none' else {'display': 'none'}
        
        # Actualizar el estilo del botón directamente
        new_button_style = dict(current_button_style)
        new_button_style['backgroundColor'] = 'lightblue'
        
        return minimap, new_style, new_button_style
    
    return "No se pudo cargar el mapa", {'display': 'none'}, current_button_style

@app.callback(
Output('dummy-output', 'children'),
[Input('interval-component', 'n_intervals')]
)
def apply_stored_styles(n_intervals):
    return dcc.Loading(
        id="loading-icon",
        children=[html.Div(id="loading-output")],
        type="default",
    )

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
        # Aseguramos que la fecha esté en la zona horaria de Buenos Aires
        short_date = event['date_obj'].astimezone(buenos_aires_tz).strftime('%d/%m %H:%M')
        event_items.append(
            html.Div([
                html.Button(
                    f"{event['subtype']} - {short_date} - {event['street']}",
                    id={'type': 'recent-event-button', 'index': i},
                    style={
                        'display': 'block',
                        'marginBottom': '5px',
                        'width': '100%',
                        'textAlign': 'left',
                        'overflow': 'hidden',
                        'textOverflow': 'ellipsis',
                        'whiteSpace': 'nowrap',
                        'borderRadius': '15px',
                        'fontFamily': '"Roboto", sans-serif',
                        'border': 'none',
                        'padding': '10px',
                        'transition': 'background-color 0.3s'
                    }
                ),
                html.Div(id={'type': 'recent-event-minimap', 'index': i}, style={'display': 'none'})
            ])
        )
    return event_items

if 'DYNO' in os.environ:
    app.scripts.append_script({
        'external_url': 'https://cdn.jsdelivr.net/npm/vega@5.20.2/build/vega.min.js'
    })
    app.css.append_css({
        'external_url': 'https://cdn.jsdelivr.net/npm/vega@5.20.2/build/vega.min.css'
    })
    

if __name__ == '__main__':
    update_events()  # Regenerar el archivo eventos.json al iniciar
    app.run_server(debug=True, host='0.0.0.0', port=int(os.environ.get("PORT", 8080)))
