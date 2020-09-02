const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const PORT = process.argv.PORT || 8070

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.static("public"))

app.use('/api', movieRouter)
app.use("*", function(req, res){
    res.sendFile("./client/build/index.html")
  })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))