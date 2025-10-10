const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("conexion a la base de datos establecida");}
        catch (error) {
            console.log ("error en la conexion a la base de datos", error);
        };
};
module.exports = dbconnect;