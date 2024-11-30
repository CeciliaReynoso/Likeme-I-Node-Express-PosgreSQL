const express = require('express')
const morgan = require('morgan')
const path = require('path');
const APIRoutes = require('./routes/routes')
const cors = require('cors')


const app = express()

// middlewares
app.use(morgan('dev'))
//const allowedOrigins = ['http://localhost:5173', 'http://localhost:5173/vite.svg', 'http://localhost:5173/posts', 'http://localhost:3000', 'http://localhost:3000/posts'];
//const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];

//app.use(cors({
    // origin: function (origin, callback) {
    //     if (allowedOrigins.includes(origin) || !origin) {
    //         callback(null, true);
    //     } else {
    //         callback(new Error('No permitido por CORS'));
    //     }
    // },
    // methods: ['GET', 'POST', 'UPDATE'], // Métodos permitidos
//}));
app.use(cors());
app.use(express.json())
app.put('/posts/like/:id', async (req, res) => {
    const { id } = req.params;
    const { likes } = req.body;
  
    // Registro para verificar qué valor de likes se está recibiendo
    console.log("Likes received:", likes);
  
    if (isNaN(likes) || likes < 0) {
      return res.status(400).json({ message: "Invalid likes value" });
    }
  
    try {
      const result = await DB.query(
        'UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *',
        [likes, id]
      );
  
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.error("Error updating likes:", error);
      res.status(500).json({ message: "Error updating likes" });
    }
  });
        
// Routes
app.use('/', APIRoutes)
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/index.html"));
  });
  
module.exports = app