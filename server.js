async function prueba() {
    const conexion = require('./db1');
    for (let index = 0; index < 3; index++) {
        let a = await conexion.abrir();
        await conexion.cerrar(a);
    }
}
prueba();

async function pruebaMongoose() {
    const conexion = require('./db2');
    for (let index = 0; index < 3; index++) {
        let a = await conexion.abrir();
        await conexion.cerrar(a);
    }
}
pruebaMongoose();



async function pruebaMySQL() {
    const conexion = require('./db3');
    for (let index = 0; index < 3; index++) {
        let a = await conexion.abrir();
        await conexion.cerrar(a);
    }
}
pruebaMySQL();

async function pruebaSequelize() {
    const conexion = require('./db4');
    for (let index = 0; index < 3; index++) {
        let a = await conexion.abrir();
        await conexion.cerrar(a);
    }
}
pruebaSequelize();