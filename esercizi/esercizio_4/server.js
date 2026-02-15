const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs')

const CONTACTS_PATH = './contacts.json'

app.use(express.json())

app.use(express.static('public'));

app.post('/api/add', (req, res) => {
    try {
        const contact = req.body
        if (!contact.name || !contact.surname || !contact.email || !contact.phone) {
            return res.status(400).json({
                success: false,
                error: "Bisogna inserire tutti i campi"
            })
        }
        console.log("Ricevuto contatto:", contact);
        const data = fs.readFileSync(CONTACTS_PATH, "utf-8")
        const contacts = JSON.parse(data)
        contact.id = Date.now()
        contacts.push(contact)

        fs.writeFileSync(CONTACTS_PATH, JSON.stringify(contacts, null, 2));

        return res.status(201).json({
        success: true,
        contatto: contact
        });
    }
    catch (error) {
        console.log(error)
        return res
        .status(500)
        .json({
            success: false,
            error
        })
    }
})

app.post('/api/remove', (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            return res.status(400).json({
                success: false,
                error: "Id mancante"
            })
        }
        console.log("Ricevuto id contatto " + id)
        const data = fs.readFileSync(CONTACTS_PATH, "utf-8")
        const contacts = JSON.parse(data)
        const newContacts = contacts.filter(item => Number(item.id) !== Number(id))
        fs.writeFileSync(CONTACTS_PATH, JSON.stringify(newContacts, null, 2))

        return res.status(200).json({
            success: true,
            nuoviContatti: newContacts
        });
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({
                success: false,
                error
            })
    }
})

app.get('/api/contacts', (req, res) => {
    const data = fs.readFileSync(CONTACTS_PATH, "utf-8")
    const contacts = JSON.parse(data)
    return res.json(contacts)
})

app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});


app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
