require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

// LA AUTENTIFICACION CON LA BASE DE DATOS
db.authenticate()
    .then(() => console.log('Database Authenticated 😸'))
    .catch((error) => console.log(error));

//LA SINCRONIZACION CON LA BASE DE DATOS
db.sync()
    .then(() => console.log('Database Synced! 🥳'))
    .catch((error) => console.log(error));

//COLOCAR A MI APLICACION A ESCUCHAR POR EL PUERTO 3050.
const port = process.env.PORT || 3050;
app.listen(port, () => {
    console.log(`App runnig on port ${port}...`);
});
