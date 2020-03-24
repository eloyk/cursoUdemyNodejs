const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearAchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'crear':
        crearAchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo } con el limite ${ argv.limite }`))
            .catch(e => console.log(e));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comado no reconocido');
        break;
}

//let argv2 = process.argv;
//let paramamtro = argv[2];
//let base = paramamtro.split(('='))[1];

//console.log(argv.limite);