//Per il metodo di pagamento useremo Stripe, molto popolare. Andiamo nel sito ufficiale e creiamo un account e accedi. Dopo selezionare sviluppatori. Chiavi API. Copio la chiave privata e la salvo nel file .env con il nome STRIPE_KEY. Quindi creiamo questo file stripe.js. Aggiungo stripe tramite terminale: yarn add stripe. installo anche la libreria react di stripe: yarn add react-stripe-checkout

//Importo il costruttore router
const router = require("express").Router();

//Utilizzo stripe con la chiave segreta
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);
//Utilizzo l'endpoint router creando la mia funzione per il pagamento
router.post("/payment", (req, res) => {

    //Scrivendo la fonte, l'addebito e la valuta
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );

});

module.exports = router;