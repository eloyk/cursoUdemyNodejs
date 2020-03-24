//requireds
const fs = require('fs');
const colors = require('colors/safe');


let listarTabla = (base, limite = 10) => {
    console.log(colors.green(`=================================================`));
    console.log(colors.green(`Tabla del  ${base}  con un limite de ${limite} de longitud`));
    console.log(colors.green('================================================='));
    return new Promise((resolve, reject) => {

        let tablaLimite = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            tablaLimite += `${ base } * ${ i } = ${base * i}\n`;

        }
        if (!tablaLimite) {
            reject(`El limite o la base ingresados no son validos`);
        } else {
            resolve(tablaLimite);
        }
    })
}

let crearAchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';


        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('hola mundo'));

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });

    })
}

module.exports = {
    crearAchivo,
    listarTabla
}