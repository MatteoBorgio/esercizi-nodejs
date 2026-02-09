function getRandomElement(array) {
    const indiceCasuale = Math.floor(Math.random() * array.length);
    array[indiceCasuale].estrazioni += 1;
    return array[indiceCasuale].testo;
}

const express = require('express');
const app = express();

const frasiBiscottoDellaFortuna = [
  { testo: "Il successo è dietro l'angolo, non smettere di camminare.", estrazioni: 0 },
  { testo: "Un'opportunità d'oro ti si presenterà quando meno te lo aspetti.", estrazioni: 0 },
  { testo: "La tua gentilezza ti porterà in luoghi inaspettati.", estrazioni: 0 },
  { testo: "Un vecchio amico tornerà presto nella tua vita.", estrazioni: 0 },
  { testo: "La pazienza è una virtù che porterà grandi frutti oggi.", estrazioni: 0 },
  { testo: "Viaggerai verso terre lontane e vivrai grandi avventure.", estrazioni: 0 },
  { testo: "Il tuo talento creativo sarà presto riconosciuto da qualcuno di importante.", estrazioni: 0 },
  { testo: "La felicità non è una meta, ma un modo di viaggiare.", estrazioni: 0 },
  { testo: "Segui il tuo istinto, raramente ti porterà sulla strada sbagliata.", estrazioni: 0 },
  { testo: "Un piccolo gesto oggi avrà un grande impatto domani.", estrazioni: 0 },
  { testo: "La fortuna aiuta gli audaci: è il momento di osare.", estrazioni: 0 },
  { testo: "Riceverai una notizia inaspettata che ti farà sorridere.", estrazioni: 0 },
  { testo: "La saggezza si trova nel silenzio, ascolta il tuo cuore.", estrazioni: 0 },
  { testo: "Il tuo duro lavoro sarà ripagato molto presto.", estrazioni: 0 },
  { testo: "Qualcuno sta pensando a te con molto affetto in questo momento.", estrazioni: 0 },
  { testo: "Non avere paura del cambiamento, abbraccialo con coraggio.", estrazioni: 0 },
  { testo: "La tua risata è la chiave per aprire molte porte chiuse.", estrazioni: 0 },
  { testo: "Un sogno che avevi nel cassetto sta per diventare realtà.", estrazioni: 0 },
  { testo: "Oggi è il giorno perfetto per iniziare un nuovo progetto.", estrazioni: 0 },
  { testo: "Credi in te stesso e il mondo crederà in te.", estrazioni: 0 }
];

const proverbi = [
  { testo: "Il lupo perde il pelo ma non il vizio.", estrazioni: 0 },
  { testo: "Chi dorme non piglia pesci.", estrazioni: 0 },
  { testo: "La gatta frettolosa ha fatto i gattini ciechi.", estrazioni: 0 },
  { testo: "Tanto va la gatta al lardo che ci lascia lo zampino.", estrazioni: 0 },
  { testo: "Chi va piano, va sano e va lontano.", estrazioni: 0 },
  { testo: "A caval donato non si guarda in bocca.", estrazioni: 0 },
  { testo: "Il buongiorno si vede dal mattino.", estrazioni: 0 },
  { testo: "Chi ben comincia è a metà dell'opera.", estrazioni: 0 },
  { testo: "L'erba del vicino è sempre più verde.", estrazioni: 0 },
  { testo: "Non è tutto oro quel che luccica.", estrazioni: 0 },
  { testo: "Patti chiari, amicizia lunga.", estrazioni: 0 },
  { testo: "Aiutati che il ciel t'aiuta.", estrazioni: 0 },
  { testo: "Meglio tardi che mai.", estrazioni: 0 },
  { testo: "Chi trova un amico trova un tesoro.", estrazioni: 0 },
  { testo: "L'unione fa la forza.", estrazioni: 0 },
  { testo: "Ogni lasciata è persa.", estrazioni: 0 },
  { testo: "Non dire gatto se non ce l'hai nel sacco.", estrazioni: 0 },
  { testo: "A buon intenditore, poche parole.", estrazioni: 0 },
  { testo: "Il riso abbonda sulla bocca degli stolti.", estrazioni: 0 },
  { testo: "Vedi Napoli e poi muori.", estrazioni: 0 }
];

app.get('/', (req, res) => {
    res.status(404).send("Devi specificare un percorso valido: /cookie o /proverbi");
})

app.get('/cookie', (req, res) => {
    const fraseCasuale = getRandomElement(frasiBiscottoDellaFortuna);
    res.status(200).send(fraseCasuale);
});

app.get('/proverbi', (req, res) => {
    const proverbioCasuale = getRandomElement(proverbi);
    res.status(200).send(proverbioCasuale);
});

app.get('/list'), (req, res) => {
    res.status(404).send("Devi specificare un sottoindirizzo valido: /lista/cookie o /lista/proverbi")
}

app.get("/lista/cookie", (req, res) => {
    res.status(200).json(frasiBiscottoDellaFortuna);
});

app.get("/lista/proverbi", (req, res) => {
    res.status(200).json(proverbi);
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});