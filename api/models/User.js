//Importiamo mongoose
const mongoose = require("mongoose");

//Definiamo i requisiti per un nuovo utente
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    //Creiamo annunci aggiornati quando viene creato un nuovo utente
    { timestamps: true }
);

//Esportiamo il modulo
module.exports = mongoose.model("User", UserSchema);