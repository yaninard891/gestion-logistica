const mongoose = require('mongoose');
const express= require('express');
const dotenv = require('dotenv');
const dbconnect= require ("./config/db")
const cors = require('cors');
const corsOption = require('./config/corsOption');
const app = express();

const ordenesRoutes = require('./routes/ordenes');


dotenv.config();
dbconnect().then(() => {
app.use(cors(corsOption));

app.use(express.json());




app.get("/",(req, res)=> {
    res.send("Api de gestion logistica");

});

app.use("/api", ordenesRoutes);

const PORT = process.env.PORT || 3000;
    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
       console.log("CORS configurado para:", corsOption.origin.join(", "));
    });

}).catch(err => {
    console.log('No se pudo iniciar el servidor debido a un error en la base de datos');
    
});