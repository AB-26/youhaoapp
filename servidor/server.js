require('./app/config/db');
const express = require('express');
const cors = require('cors');
const app = express();

//deifinimos el puerto
const port = (process.env.port || 3000);

//cors
app.use(cors());

//Admite JSON
app.use(express.json());

//seteamos el puerto
app.set('port', port);

//usamos las rutas
app.use('/login', require('./app/routes/login'));
app.use('/templo', require('./app/routes/templo'));
app.use('/bloques', require('./app/routes/bloques'));
app.use('/dialogos', require('./app/routes/dialogos'));

//iniciar el servidor
app.listen(app.get('port'), (err) => {
    if (err) {
        console.log('Error al iniciar el servidor: ', err);
    } else {
        console.log('Servidor iniciado en el puerto: ' + port);
    }
});