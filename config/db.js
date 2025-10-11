require("dotenv").config();
const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión exitosa a MongoD");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error.message);
  }
};

module.exports = dbconnect;