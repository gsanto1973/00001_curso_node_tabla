const argv = require("yargs")
    .option('b', {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Describe la base de la multimplicación"

    })
    .option('l', {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Describe si se imprime la lista en consola"
    })
    .option('h', {
        alias: "hasta",
        type: "number",
        demandOption: true,
        default: 10,
        describe: "Describe hasta que número multilplicar la base"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base debe ser numerica";
        }
        if (isNaN(argv.h)) {
            throw "El valor hasta debe ser numerico";
        }
        return true;
    })
    .argv;

module.exports = argv;
