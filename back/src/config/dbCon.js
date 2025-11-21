const mongoose = require("mongoose")
require('dotenv').config()


const dbCon = async () => {    
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ydikaln.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`)
}

module.exports = dbCon




// await mongoose.connect("mongodb+srv://diegoacunadev:xjXoDMnh360RjMkq@moviesdb.ydikaln.mongodb.net/Moviesdb")