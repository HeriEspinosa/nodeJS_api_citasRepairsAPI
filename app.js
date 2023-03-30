//REQUERIMOS EXPRESS QUE ES UNA LIBRERIA DE NODEJS.
const express = require('express');

//REQUERIMOS MORGAN QUE ES UNA LIBRERIA DE NODEJS.
const morgan = require('morgan');

//REQUERIMOS CORS QUE ES UNA LIBRERIA DE PROTECCION BASICA, COMO UN FIREWALL.
const cors = require('cors');

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

//INICIAMOS LA APLICACION DE EXPRESS EN LA VARIABLE APP
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//ASIGNAR LA RUTA PRINCIPAL A LA APP
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);

module.exports = app;
