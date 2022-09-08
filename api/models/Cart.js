//Importiamo moongoose
const mongoose = require("mongoose");

//Definisce i requisiti per ogni carello
const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        //sarà un array con proprietà specifiche
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
    },
    //Creare annunci aggiornati quando viene creato un nuovo utente
    { timestamps: true }
);

//Esportiamo il modulo
module.exports = mongoose.model("Cart", CartSchema);