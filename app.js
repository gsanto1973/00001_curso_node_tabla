// desestructuración de objetos
const { crearArchivo } = require("./helpers/multiplicar");
require("colors");
const argv = require("./config/yargs");

console.clear();

//console.log(process.argv);
//console.log(argv);
console.log("base: yargs".green, argv.base);
console.log("hasta: yargs".cyan, argv.hasta);

// desestructuración de arreglos
/*
const [, , arg3 = "base=2"] = process.argv;
console.log(arg3);
const [, base = 3] = arg3.split("=");
console.log(base);
*/
//const base = 5;

crearArchivo(argv.b, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err));

