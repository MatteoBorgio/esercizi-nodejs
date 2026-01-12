const modulo = require('./module')
const {readFileSync, writeFileSync} = require('fs')

function scriviListaSuFile(nomeFile, lista) {
    let contenuto = ""
    for (let elemento of lista) {
        contenuto += elemento + "\n"
    }
    writeFileSync(nomeFile, contenuto, "utf8")
}

let tabellina = modulo.write_multiplication_table(6)

scriviListaSuFile("./text.txt", tabellina, "utf8")