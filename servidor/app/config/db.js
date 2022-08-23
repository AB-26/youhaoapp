const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database:'youhao'
});

conexion.connect((err) => {
    if (err) throw err;
    else {
        console.log('BD OK');
    }
});

module.exports = conexion;