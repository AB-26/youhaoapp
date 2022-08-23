const router = require('express').Router();
const conexion = require('../config/db');
const jwt = require('jsonwebtoken');


const secretKey = 'youhaosecretkey2022';

router.post('/', (req, res) => {
    const { username, pass } = req.body;
    let sql = 'select * from usuarios where username = ? and pass = ?'
    conexion.query(sql,[username, pass], (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            if (rows.length > 0) {
                let data = JSON.stringify(rows[0]);
                let token = jwt.sign(data, secretKey);
                res.status(200).json({token});
            } else {
                res.status(400).send('usuario o contraseña incorrectos');  
                //res.send({ mensaje:'usuario o contraseña inavlida' });
            }
       }
    });
}); 

module.exports = router;