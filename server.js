const express = require('express')
const app = express()
const cors = require('cors')
const constituents = require('./routes/constituents')
const certrequests = require('./routes/certrequests')
require('./db')

app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use('/api/constituents', constituents)
app.use('/api/certrequests', certrequests)


const port = process.env.PORT || 3000
app.listen(port, (err)=>{
    console.log(`Server is running at port: ${port}`)
})