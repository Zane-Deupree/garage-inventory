const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const PORT = process.env.PORT || 8070

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.get('localhost:3000/movies/create')

app.use('/api', movieRouter)
app.use("*", function(req, res){
    res.sendFile("./client/build/index.html")
  })
  app.use(express.static("public"))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://zane:Root1996@cluster0.umq8p.mongodb.net/cluster0?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});