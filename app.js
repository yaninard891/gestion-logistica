const express= require('express');
const app = express();
const dbconnect = require('./config/db');
const ordenesRoutes = require('./routes/ordenes');


app.use(express.json());
app.use(ordenesRoutes);

dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo conectar a la base de datos', err);
});

