const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: '151.106.98.0',
    user: 'u159554062_youhaoapp',
    password: 'Soporte2020*',
    database:'u159554062_Youhaoapp'
});

conexion.connect((err) => {
    if (err) throw err;
    else {
        console.log('BD OK');
    }
});

module.exports = conexion;
