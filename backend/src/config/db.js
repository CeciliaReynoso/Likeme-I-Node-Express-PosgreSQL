//El archivo no sube a github para mantener el password con seguridad
require('dotenv').config()//es importante que esto vaya antes de la lines destructurada 5
const { Pool } = require('pg')
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env

const DB = new Pool(
    {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        allowExitOnIdle: true
    }
)

module.exports = {
    DB
}
