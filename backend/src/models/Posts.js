const { DB } = require('../config/db')//conexion a base de datos

const crear = async (titulo, img, descripcion) => {

    const SQLQuery = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0) RETURNING *"
    
    const SQLValues = [titulo, img, descripcion]

    const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)

    return {
        rowCount,
        data:rows
    }
}

const ver = async () => {

    const SQLQuery = "SELECT * FROM posts"
    const { rowCount, rows } = await DB.query(SQLQuery)

    return {
        rowCount,
        data:rows
    }
}

module.exports = {
    crear,
    ver
}