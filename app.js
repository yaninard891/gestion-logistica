const express= require('express');
const dotenv = require('dotenv');
const app = express();
const dbconnect = require('./config/db');
const ordenesRoutes = require('./routes/ordenes');

dotenv.config();


app.use(express.json());


app.get("/",(req, res)=> {
    res.send("Api de gestion logistica");

});
app.use("/api", ordenesRoutes);



dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo conectar a la base de datos', err);
});

