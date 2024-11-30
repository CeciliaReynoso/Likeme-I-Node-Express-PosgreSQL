const { Router } = require('express')
const { handleCreatePost, handleGetPosts } = require('../controllers/index')

const router = Router()

router.post("/posts", handleCreatePost)
router.get("/posts", handleGetPosts)

module.exports = router;