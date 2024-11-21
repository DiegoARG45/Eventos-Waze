
import time
import sched
import json
import subprocess
from waze_dashboard import fetch_waze_data  # Asegúrate de que este archivo existe y contiene la función fetch_waze_data
import pytz
from datetime import datetime
from collections import defaultdict

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

# Inicializa el scheduler
scheduler = sched.scheduler(time.time, time.sleep)

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

            # Usar el diccionario event_names para traducir el nombre del evento
            translated_event_name = event_names.get(subtype, subtype)  # Si no se encuentra, usa el subtype original

            # Saltar eventos sin un tipo o subtipo válido
            if not alert_type and not subtype:
                continue

            pubMillis = alert.get('pubMillis', 0)
            date_obj = datetime.fromtimestamp(pubMillis / 1000.0, tz=pytz.UTC).astimezone(buenos_aires_tz)
            date_str = date_obj.strftime('%d/%m %H:%M')

            street = alert.get('street', 'Calle desconocida')
            nearest_intersection = alert.get('nearBy', 'Intersección desconocida')

            if translated_event_name not in processed_data['alerts_by_type']:  # Usar el nombre traducido
                processed_data['alerts_by_type'][translated_event_name] = 0
            processed_data['alerts_by_type'][translated_event_name] += 1

            processed_data['alert_details'][translated_event_name].append({ # Usar el nombre traducido
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
                    'evento': translated_event_name,  # Usar el nombre traducido aquí
                    'street': street,
                    'nearest_intersection': nearest_intersection
                })

    if 'jams' in raw_data:
        processed_data['jams'] = len(raw_data['jams'])
        processed_data['total_jam_length'] = sum(jam.get('length', 0) for jam in raw_data['jams'])

    return processed_data

def update_events():
    print("Ejecutando actualización de eventos...")
    api_url = "https://www.waze.com/row-partnerhub-api/partners/11517520851/waze-feeds/4004dedf-0b87-4eed-b3f6-e0ad22fa5238?format=1"
    raw_data = fetch_waze_data(api_url)
    raw_data['alerts'] = [
        alert for alert in raw_data.get('alerts', [])
        if alert.get('reportRating', 0) >= 4 and alert.get('type')  # reportRating >= 4 y tiene un 'type'
    ]
    processed_data = process_waze_data(raw_data)
    
    # Guardar eventos en un archivo JSON
    with open('assets/resources/eventos.json', 'w') as json_file:
        json.dump(processed_data['alert_coordinates'], json_file)
    
    # Ejecutar el script convert_json_to_geojson.py
    subprocess.run(['python', 'assets/resources/convert_json_to_geojson.py'])
    print("Actualización completa.")

def schedule_update():
    update_events()  # Ejecutar inmediatamente la primera vez
    scheduler.enter(720, 1, schedule_update)  # Programar cada 720 segundos (12 minutos)

if __name__ == "__main__":
    print("Iniciando actualización periódica cada 12 minutos...")
    scheduler.enter(0, 1, schedule_update)  # Primera ejecución inmediata
    scheduler.run()  # Mantener el programa ejecutándose
