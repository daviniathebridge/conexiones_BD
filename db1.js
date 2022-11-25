conexion = {
    abrir: async () => {
        const { MongoClient } = require('mongodb');
        const url = "mongodb://127.0.0.1:27017/";
        const mydb = "Empresa_Nueva_Version";
        const client = new MongoClient(url + mydb);
        console.log("Abierta");
        return await client.connect();

    },
    cerrar: async con => {
        await con.close();
        console.log("Cerrada");
    }
}


module.exports = conexion;





