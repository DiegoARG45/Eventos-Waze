import json

# Cargar los datos JSON del archivo
with open('assets/resources/eventos.json', 'r') as f:
    eventos_data = json.load(f)

# Convertir los datos JSON a formato GeoJSON
geojson_data = {
    "type": "FeatureCollection",
    "features": []
}

for evento in eventos_data:
    feature = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [evento["lon"], evento["lat"]]
        },
        "properties": {
            "evento": evento["evento"],
            "street": evento["street"],
            "nearest_intersection": "Intersección desconocida"
        }
    }
    geojson_data["features"].append(feature)

# Guardar los datos GeoJSON en un nuevo archivo
with open('assets/resources/eventos_geojson.json', 'w') as f:
    json.dump(geojson_data, f)

print("Los datos GeoJSON se han creado y guardado correctamente en 'eventos_geojson.json'.")