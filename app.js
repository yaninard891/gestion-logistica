
const express= require('express');
const dotenv = require('dotenv');
const dbconnect= require ("./config/db")
const app = express();

const ordenesRoutes = require('./routes/ordenes');
require('dotenv').config();
const mongoose = require('mongoose');

dotenv.config();    
dbconnect();

app.use(express.json());


app.get("/",(req, res)=> {
    res.send("Api de gestion logistica");

});
app.use("/api", ordenesRoutes);

dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
    });

}).catch(err => {
    console.log('No se pudo iniciar el servidor debido a un error en la base de datos');
});