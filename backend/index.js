const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const mysql = require('./src/databases/mysqlconection');
const mongodb = require('./src/databases/mongodbconection');


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.get('/check-mysql-connection', (_req, res) => {

    mysql.authenticate().then(() => {
        res.json({
            msg: 'Base de datos mysql conectada'
        })
    }).catch(err => {
        res.status(400).json({
            msg: 'Error al conectarse a la base de datos mysql'
        })
    })

});

app.get('/check-mongodb-connection', (_req, res) => {

    mongodb().then(() => {
        res.json({
            msg: 'Base de datos mongoDB conectada'
        })
    }).catch(err =>{
        res.status(400).json({
            msg: 'Error al conectarse a la base de datos mongoDB'
        })
    })

});

app.listen(process.env.PORT, (err) => {
    err ? console.log(`Ocurrio un error: ${err}`)
        : console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})