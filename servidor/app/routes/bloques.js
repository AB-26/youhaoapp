const router = require('express').Router();
const conexion = require('../config/db');
const jwt = require('jsonwebtoken');

//obtener meses
router.get('/meses/:roleid',(req, res) => {
    const { roleid } = req.params;
    let query = '';
    let envia = [];
    if (roleid === 'user1') {
        query = 'select * from meses where (plan = ?)';
        envia = [1];
    } else if (roleid === 'user2') {
        query = 'select * from meses where (plan = ?) or (plan = ?)';
        envia = [1, 2];
    } else if(roleid === 'user'){
        query = 'SELECT * FROM meses'
    } else {
        query = '';
    }

    if (query !== '') {
        conexion.query(query, envia, (err, rows, fields) => {
            if (err) {res.send(err)}
            else { res.json(rows)}
        });
    } else {
        res.status(401).send('No data');
    }
});

router.get('/bloque/:idmes',(req, res) => {
    const { idmes } = req.params;
    let query = 'Select * from bloques where id_mes = ?'
    conexion.query(query, [idmes], (err, rows, fields) => {
        if (err) { res.send(err) }
        else { res.json(rows) }
    });
});

router.get('/contenido/:idbloque', (req, res) => {
    const { idbloque } = req.params;
    let query = 'select * from palabras where id_bloque = ?';
    conexion.query(query, [idbloque], (err, rows, fields) => {
        if (err) { res.send(err) }
        else { res.json(rows) };
    });
});



module.exports = router;