const mongoose = require('mongoose')


mongoose
    .connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true, useUnifiedTopology: true} )
    .catch(e => {
        console.error('Connection error', e.message)
    
    })

const db = mongoose.connection

module.exports = db