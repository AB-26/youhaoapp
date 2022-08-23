const router = require('express').Router();
const conexion = require('../config/db');

router.get('/:idbloque', (req, res) => {
    const { idbloque } = req.params;
    let query = 'select * from dialogos where id_bloque = ?'
    conexion.query(query, [idbloque], (err, rows, flieds) => {
        if (err) { console.log(err) }
        else { res.json(rows) }
    });
});

module.exports = router;