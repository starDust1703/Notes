const mongoose = require('mongoose')
require('dotenv').config()

const mongoURL = process.env.MONGO_CONN;

mongoose.connect(mongoURL)
.then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log("Error")
})