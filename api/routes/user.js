//Importo il modello
const User = require("../models/User");

//Importo verifyToken
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//Definisco il router utenti
const router = require("express").Router();

// UPDATE.  Aggiorniamo il nostro utente quindi uso put
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


//DELETE. Un utente può cancellare il suo account
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER. Un admin può cercare un utente
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL USER. Un admin può cercare tutti gli utenti
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS. Restituisce le statische dell'utente nel mese

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});


//**** TEST!!!!!!!!!!***
//Possiamo testare sia usertest, userposttest e anche altri con l'app postman scrivendo localhost:5000/api/user/usertest scegliendo tutti i parametri corretti e otteremo come risultato il testo definito in res.send

//Userò router per prendere la richiesta e la risposta. Richiede cosa stiamo ricevendo dall'utente che può fornire qualsiasi imput anche vuoto non importa: Quindi invierò all'utento la risposta con esito positivo 
// router.get("/usertest", (req, res) => {
//     res.send("user test is successfull");
// });

//Faccio lo stesso per i post utenti
// router.post("/userposttest", (req, res) => {
//     const username = req.body.username;
//     res.send("Your username is: " + username);
// });
//**** FINE TEST */


//Esportiamo il router

module.exports = router;

