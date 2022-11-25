conexion = {
    abrir: async () => {
        const mongoose = require("mongoose");

        const url = "mongodb://localhost:27017/test";
        
        console.log("Abierta Mongoose");
        
        return await mongoose.connect(url);

    },
    cerrar: async con => {
        await con.disconnect();
        console.log("Cerrada Mongoose");
    }
}


module.exports = conexion;





