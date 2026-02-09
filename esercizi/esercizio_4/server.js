const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs')

const CONTACTS_PATH = './contacts.json'

app.use(express.json())

app.use(express.static('public'));

app.post('/api/add', (req, res) => {
    try {
        const contatto = req.body
        console.log("Ricevuto contatto:", contatto);
        const data = fs.readFileSync(CONTACTS_PATH, "utf-8")
        const contatti = JSON.parse(data)
        contatto.id = Date.now()
        contatti.push(contatto)

        fs.writeFileSync(CONTACTS_PATH, JSON.stringify(contatti, null, 2));

        res.status(201).json({
        success: true,
        contatto
        });
    }
    catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            success: false,
            error
        })
    }
})




app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});


app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
