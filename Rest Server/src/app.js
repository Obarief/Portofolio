require('dotenv').config()
const express = require('express');

const PORT = process.env.PORT || 5000

const app = express();
const usersRoutes = require('../routes/users')
const middlewareLogRequest = require('../middleware/logs');
const upload = require('../middleware/multer');



app.use(middlewareLogRequest);
app.use(express.json())
app.use('/assets',express.static('public/img'))


app.use('/users', usersRoutes);

app.post('/upload', upload.single('photo'), (req,res) => {
    res.json({
        message: 'Upload berhasil'
    })
})

app.use((error, req, res, next) => {
    res.json({
        message: res.message
    })
})

// server listen
app.listen(PORT, () => {
    console.log(`Server Telah Menyala di port ${PORT}`)
})