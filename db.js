require('dotenv').config()
const mongoose = require('mongoose')
const _url = process.env.DB_CONNECTION


const dbConnect = mongoose.connect(_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error)=>{
    if(error) console.log('Error connecting to database. ' + error.message)

    console.log('Connected to database')
})

module.exports =dbConnect