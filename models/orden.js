const mongose= require("mongoose");

const ordenSchema = new mongose.Schema({
    destino: { type: String, required: true },
    contenido: { type: String, required: true },
    fecha_creacion: { type: Date, default: Date.now },
    estado:  {type: String, enum: ["Pendiente", "En transito", "Entregado"], default: 'Pendiente'}
}, 
{timestamps: true}
);

module.export= mongose.model("orden", ordenSchema)