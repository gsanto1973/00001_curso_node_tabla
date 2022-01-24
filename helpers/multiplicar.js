const fs = require("fs");
const colors = require("colors");

// se cambia el writeFile por writeFileSync
/*
fs.writeFile(`tabla-${base}.txt`, output, (err) => {
    if (err) throw err;
    console.log("tabla craada");
});
*/

// 1 usando promesas Promise
/*
const crearArchivo = num => {
    console.log("=================");
    console.log("  Tabla del:", num);
    console.log("=================");

    return new Promise((resolve, reject) => {
        let output = "";
        for (let i = 1; i <= 10; i++) {
            //console.log(`${i} X ${num} = ${i * num} `);
            output += `${i} X ${num} = ${i * num}\n`;
        };
        console.log(output);

        fs.writeFileSync(`tabla-${num}.txt`, output);

        resolve(`Tabla-${num}.txt`);
    });
};
*/

// 2 usando async que devuelve una promesa
const crearArchivo = async (base, hasta, listar) => {

    try {

        let output = "";
        let output2 = "";
        for (let i = 1; i <= hasta; i++) {
            //console.log(`${i} X ${num} = ${i * num} `);
            output += `${i} ${'X'} ${base} ${'='} ${i * base}\n`;
            output2 += `${i} ${'X'.green} ${base} ${'='.magenta} ${i * base}\n`;
        };

        if (listar) {
            console.log("=================".green);
            console.log("  Tabla del:".rainbow, colors.yellow(base));
            console.log("=================".red);
            console.log(output2);
        }

        fs.writeFileSync(`./salida/tabla-${base}-hasta-${hasta}.txt`, output);

        return `tabla-${base}-hasta-${hasta}.txt`;
    } catch (err) {
        throw err;
    }
};


module.exports = {
    crearArchivo
};

