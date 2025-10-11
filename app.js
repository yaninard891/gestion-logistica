
const express= require('express');
const dotenv = require('dotenv');
const app = express();

const ordenesRoutes = require('./routes/ordenes');
require('dotenv').config();
const mongoose = require('mongoose');

dotenv.config();    



app.use(express.json());


app.get("/",(req, res)=> {
    res.send("Api de gestion logistica");

});
app.use("/api", ordenesRoutes);

const dbconnect= async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error.message);
    }
};



dbconnect().then(() => {
    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
}).catch(err => {
    console.error('No se pudo conectar a la base de datos', err);
});

module.exports= dbconnect;
