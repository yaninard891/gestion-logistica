const mongose= require("mongoose");

const ordenSchema = new mongose.Schema({
    destino: { type: String, required: true },
    contenido: { type: String, required: true },
    fecha_creacion: { type: Date, default: Date.now },
    estado: { type: String, enum: ["Pendiente", "En transito", "Entregado"], default: 'Pendiente' }
});

const orden = mongose.model("orden", ordenSchema); 
module.exports = orden;
