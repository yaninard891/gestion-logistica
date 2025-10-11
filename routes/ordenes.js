const express= require("express");
const router= express.Router();
const Orden = require("../models/orden"); 

router.get ("/ordenes", async (req, res) => {
    try {
        const {estado}=req.query;
        let ordenes;
        if (estado) {
            ordenes= await Orden.find({estado});
        } else {
            ordenes= await Orden.find();
        }
        res.json(ordenes);

    
    } catch (error) {
        res.status(500).send({mensaje: "Error al obtener las órdenes", error });
    }
    });

    router.get("/ordenes/:id", async (req, res) => {
        try {
        
            const orden = await Orden.findById(req.params.id);
            if (!orden) {
                return res.status(404).send({ mensaje: "Orden no encontrada" });
            }
            res.status(200).send(orden);
        } catch (error) {
            res.status(500).send ({ mensaje: "Error al obtener la orden",
            error
        });
        }
    });

    router.post("/ordenes", async (req, res) => {
        const body= req.body;
        try {

            const nuevaOrden = await Orden.create(body);
                res.status(201).send(nuevaOrden) }
            catch (error) {
                res.status(400).send(error);
            }
        });

        router.put ("/ordenes/:id",  async (req, res)=> {
            try {
                const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
                if (!ordenActualizada) {
                    return res.status(404).send({ mensaje: "Orden no encontrada" });
                }
                res.status(200).send(ordenActualizada);
        } catch (error) {
            res.status(500).send({ mensaje: "Error al actualizar la orden", error });
        }
    });

        router.delete("/ordenes/:id", async (req, res) => {
            try {
                const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
                if (!ordenEliminada) {
                    return res.status(404).send({ mensaje: "Orden no encontrada" });
                }
                res.status(200).send({ mensaje: "Orden eliminada correctamente" });
            } catch (error) {
                res.status(500).send({ mensaje: "Error al eliminar la orden", error });
            }
        });

        module.exports=router;
        
