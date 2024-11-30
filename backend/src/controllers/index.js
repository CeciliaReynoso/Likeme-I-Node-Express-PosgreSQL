let Posts = require('../models/Posts')

const handleCreatePost = async (req, res) => {

    const { titulo, img, descripcion } = req.body

    const response = await Posts.crear(titulo, img, descripcion)

    res.status(200).json({
        msg: "Post creado con éxito!",
        data: response
    })
}

const handleGetPosts = async (req, res) => {

    const response = await Posts.ver()

    res.status(200).json({
        msg: "Lista de Posts",
        data: response
    })
}

module.exports = {
    handleCreatePost,
    handleGetPosts
}