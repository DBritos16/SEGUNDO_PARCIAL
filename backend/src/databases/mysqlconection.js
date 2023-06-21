const { Sequelize } = require('sequelize');

const mysqlConection = new Sequelize(
    'parcial', 
    'root',
    'mypassword',
    {
        host: process.env.MYSQL_DB_HOST,
        dialect: 'mysql'
    }
);


module.exports = mysqlConection;