const jwt = require('jsonwebtoken');

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

exports.module = verifyToken;