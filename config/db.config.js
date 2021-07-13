const mysql = require('mysql');

conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_mysql_crud_db"
})

conexion.connect((err)=>{
    if(err) throw err;
    else{
        console.log('conectado');
    }
})

module.exports = conexion;