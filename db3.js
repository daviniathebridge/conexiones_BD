conexion = {
    abrir: async () => {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'prueba'
        });
        connection.connect((err)=> {
            if(!err){
                console.log('Abierta MySQL');
            }
        });
        return connection; 

    },
    cerrar: async con => {
        con.end();
        console.log('Cerrada MySQL');
    }
}


module.exports = conexion;





