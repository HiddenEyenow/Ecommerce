//Importiamo mongoose
const mongoose = require("mongoose");

//Definisce i requisiti per ogni prodotto
const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },

    },
    //Creare annunci aggiornati quando viene creato un nuovo utente
    { timestamps: true }
);

//Esportiamo il modulo
module.exports = mongoose.model("Product", ProductSchema);