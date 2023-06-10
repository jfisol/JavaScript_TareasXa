const { Sequelize } = require('sequelize'); //importar la libreria sequelize
//creainstancia de conexion
const dbInstance = new Sequelize({
    host: 'localhost',
    database: 'Biblioteca',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    username:'usuario',
    password:'users123',
    port: 3306,
    dialect:'mysql'
});

module.exports = { dbInstance }