"GESTION DE ORDENES DE LOGISTICA"

Descripción:
Este proyecto es una API para gestinar órdenes de logística, que permite crear, leer, actualizar y eliminar ordenes. Como tambien filtar ordenes segun su estado, entregado, en transito o pendiente.

Despliegue
La API está desplegada en: https://gestion-logistica.vercel.app/api/ordenes

Caracteristicas:
* CRUD de ordenes: Crear, consultar, actualizar y eliminar infromacion de las ordenes.
* Base de datos MongoDB: persistencia de datos.
* CORS configurado: para comunicación con frontend
* API RESTful: Endpoint estándar para operaciones CRUD

Tenologías utilizadas
* Node.js - Runtime de JavaScript
* Express.js - Framework web
* MongoDB - Base de datos NoSQL
* Mongoose - ODM para MongoDB
* CORS - Middleware para Cross-Origin Resource Sharing
* Vercel - Plataforma de despliegue

Estructura del Proyecto

 ``` 
 bash
├──config/
│   ├── corsOption.js     # Configuración de Cors
│   └── dn.js     # Configuración de MongoDB
├── models/
│   └── orden.js     # Modelo de Mongoose para las ordenes
├── routes/
│   └── ordenes.js     # Rutas de la API
├── app.js     # Configuración principal de Express
└── vercel.json     # Configuración de Vercel
```


API Endpoints
GET /api/ordenes -Obtener todas las ordenes
GET /api/ordenes?estado= -Filtrar ordenes por "Pendiente", "En transito" y "Entregada"
GET /api/ordenes/:id -Obtener una orden por ID
POST /api/ordenes/ -Crear nueva orden
PUT /api/ordenes/:id -Actualizar una orden por ID
DEL api/ordenes/:id -Eliminar una Orden por ID

Estructura de la Orden

```
json
{
"_id": "string",
"destino": "string",
"contenido": "string",
"fecha_creacion": "date",
"estado":  "string"
}
```


Instalacion Local
1- Instalar dependencias:
npm install

2- Configurar variables de entorno:
Crear archivo .env con:
MONGO_URI= mongodb+srv://admin:molly12@api-logistica.7dxwpqg.mongodb.net/?retryWrites=true&w=majority&appName=api-logistica
PORT=3000

3- Ejecutar en desarrollo:
npm start

La API esta disponible en http://localhost:3000

Configuracion:
MongoDB
La aplicación se conecta a MongoDB Atlas. 

CORS
El CORS está configurado para permitir conexiones desde:

http://localhost:5173 (desarrollo local)

Scripts Disponibles

* npm start - Iniciar servidor en producción
* npm run dev - Iniciar servidor en desarrollo (con nodemon)