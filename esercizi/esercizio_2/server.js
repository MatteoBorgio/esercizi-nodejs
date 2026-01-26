const http = require('http');
const frasi = [
  "Il gatto osservava la pioggia come se stesse risolvendo un mistero.",
  "Ho dimenticato l’ombrello proprio nel giorno più piovoso dell’anno.",
  "Una tazza di caffè può cambiare completamente il destino di una mattina.",
  "Il treno arrivò in ritardo, ma nessuno sembrò farci caso.",
  "Le luci della città brillavano come stelle artificiali.",
  "Aprì il libro a caso e trovò esattamente la frase che gli serviva.",
  "Il silenzio della notte era interrotto solo dal rumore del vento.",
  "Una vecchia canzone alla radio riportò alla mente ricordi lontani.",
  "Il cane scodinzolava convinto di aver fatto qualcosa di importante.",
  "Il mare aveva un colore diverso quel giorno, quasi irreale.",
  "Camminare senza meta è spesso il modo migliore per pensare.",
  "La pizza fredda a mezzanotte ha sempre un sapore speciale.",
  "Un messaggio inaspettato può cambiare l’umore in pochi secondi.",
  "Il quaderno era pieno di appunti che nessuno avrebbe capito.",
  "Le foglie cadevano lente, come se avessero tutto il tempo del mondo.",
  "La sveglia suonò, ma il sogno non voleva finire.",
  "Una risata improvvisa rese il momento perfetto.",
  "Il computer si bloccò proprio quando tutto stava andando bene.",
  "Il profumo del pane caldo riempiva l’aria del mattino.",
  "Guardare il cielo aiutava sempre a mettere le cose in prospettiva."
];

const server = http.createServer((req, res) => {
    const fraseCasuale = frasi[Math.floor(Math.random() * frasi.length)];
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(fraseCasuale);
    }
    else if (req.url === '/cookie') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Un piccolo cambiamento oggi aprirà la strada a una grande opportunità domani.')
    }
    else if (req.url === '/proverbi') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Chi semina vento, raccoglie tempesta.');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Indirizzo non trovato');
    }
});

server.listen(5000);
console.log('Server running on http://localhost:5000');
