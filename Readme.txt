Dashboard Eventos de Waze

Este proyecto es una aplicación web que muestra alertas de tráfico y atascos utilizando datos de Waze. El dashboard permite visualizar eventos recientes, mapas con ubicaciones de alertas y gráficos relacionados con los eventos.

Requisitos del Sistema

Requisitos de software:

Python: 3.8 o superior
El código ha funciona con Python 3.8.10 y superior. 

Librerías necesarias:

Para correr este proyecto, es necesario instalar las siguientes librerías de Python.

El archivo requirements.txt incluye las siguientes dependencias y versiones:

dash==2.18.0
dash-core-components==2.0.0
dash-html-components==2.0.0
dash-leaflet==1.0.15
dash-table==5.0.0
pandas==2.2.2
plotly==5.24.0
requests==2.32.3

Estas librerías permiten construir la interfaz web con Dash, manipular y visualizar datos con Pandas y Plotly, y realizar solicitudes HTTP con Requests.

Estructura del Proyecto

waze_dashboard.py: Contiene la lógica principal de la aplicación Dash. Genera el layout, los gráficos y los mapas interactivos basados en los datos de tráfico.

fetch_waze_data.py: Realiza la consulta a la API de Waze para obtener los datos de alertas y procesarlos.

requirements.txt: Define las dependencias necesarias para el proyecto.

Notas

La aplicación utiliza datos en tiempo real proporcionados por la API de Waze.

El dashboard se actualiza automáticamente cada 5 minutos, mostrando las últimas alertas y eventos recientes.