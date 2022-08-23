const router = require('express').Router();
const conexion = require('../config/db');
const jwt = require('jsonwebtoken');

router.post('/', verifyToken, (req, res) => {
    res.send('entro a templo');
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).json('no autorizado');
    
    const token = req.headers.authorization.substr(7);
    if (token !== '') {
        const content = jwt.verify(token, 'youhaosecretkey2022');
        req.data = content;
        next();
    } else {
        res.status(401).json('Token Vacio');
    }
}

module.exports = router;