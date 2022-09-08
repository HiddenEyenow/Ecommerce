const mongoose = require("mongoose");

//Definisce i requisiti per ogni ordine
const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },        //sarà un array con proprietà specifiche
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: { type: Number, required: true },
        //la libreria stripe ci darà tutte le informazioni sull'indirizzo paese via ecc quindi usiamo tipo oggetto
        address: { type: Object, required: true },
        status: { type: String, default: "pending" },
    },
    //Creare annunci aggiornati quando viene creato un nuovo utente
    { timestamps: true }
);

//Esportiamo il modulo
module.exports = mongoose.model("Order", OrderSchema);

