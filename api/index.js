//importo la libreria express e mongodb e dotenv

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Importo il router utente
const userRoute = require("./routes/user");

//Importo il router auth
const authRoute = require("./routes/auth");

//Importo il router product.js
const productRoute = require("./routes/product");

//Importo il router cart.js
const cartRoute = require("./routes/cart");

//Importo il router order.js
const orderRoute = require("./routes/order");

//utilizzo libreria express
const app = express();

//Configurazione dotenv
dotenv.config();

//creiamo account sul sito mongodb. Una volta creato ci connettiamo, creiamo un database. Andiamo dal sito su database- connect your application- copiamo la stringa al punto 2 e la incolliamo sotto, sostituendo la password e nome utente. Creiamo quindi il file .env e li scriviamo li. 

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

//Cosi facendo possiamo passare qualsiasi file json in entrata
app.use(express.json());

// Utilizzo l'endpoint router auth
app.use("/api/auth", authRoute);
// Utilizzo l'endpoint router User
app.use("/api/users", userRoute);
// Utilizzo l'endpoint router product
app.use("/api/products", productRoute);
// Utilizzo l'endpoint router cart
app.use("/api/carts", cartRoute);
// Utilizzo l'endpoint router order
app.use("/api/orders", orderRoute);

//Ci informa se il server sta funzionando
app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running!");
});

