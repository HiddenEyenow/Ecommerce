// Lo utilizzeremo per accedere in modo sicuro al nostro profilo
const router = require("express").Router();
//Importiamo il modello User
const User = require("../models/User")
//Importiamo crypto-js
const CryptoJS = require("crypto-js")
//Importiamo jwt
const jwt = require("jsonwebtoken")

//REGISTER. Per registrare un nuovo utente al database.(utilizzo l'app postoman per testare:post,body,raw,json)
//Per criptare la password usiamo il pacchetto crypto-js che installiamo con il terminale yarn add crypto-js. SecretPasshare per decriptare lo scriviamo in env
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    //Salviamo l'utente
    //se l'aggiunta ha avuto successo
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        //troviamo l'utente tramite il metodo find tramite il nome che univoco
        const user = await User.findOne({ username: req.body.username })

        //Scrivo la condizione che se non c'è un utente darò status 401 e un errore
        !user && res.status(401).json("Wrong credentials!");

        //Decripto la password dell'utente che logga tramite la mia passord speciale salvata in env
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        //trasformiamo la password in una stringa
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        //Se inseriamo una password sbagliata
        Originalpassword !== req.body.password && res.status(401).json("Wrong credentials!")


        //Creiamo jwt e gli diamo alcune proprietà, che ci servono per identificare l'utente interessato in caso se eliminiamo o modifichiamo un utente. Ovviamente l'admin può modificare anche il contatto tramite la passowrd segreta salvata nel file env JWT_EC. Possiamo anche inserire la data oltre la quale bisognerà nuovamente loggare
        const accesstoken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        //nacondiamo la nostra password speciale del file env
        const { password, ...others } = user._doc;

        //Se tutto va bene username e password, restituiamo il nostro utente
        res.status(200).json({ ...others, accesstoken });
    } catch (err) {
        res.status(500).json(err);
    }

})
module.exports = router;

//Per rendere la nostra applicazione più sicura aggiungeremo jwt che è il token web json, scriverò nel terminale yarn add jsonwebtoken. In questo modo in pratica forniremo ai nostri utenti un token web json dopo il processo di accesso. Quindi ogni volta che provano a fare qualsiasi richiesta, aggiornano o eliminano qualsiasi utente o prodotto o cart verificheremo se la scheda utente o l'ordine appartiene al cliente o meno.