const express = require('express')
const app = express()
const cors = require('cors')
const constituents = require('./routes/constituents')
const certrequests = require('./routes/certrequests')
const barangay = require('./routes/barangay')
const barangayofficials = require('./routes/barangayOfficials')
const home = require('./routes/home')

require('./db')

app.use(cors())

app.use(express.json())
app.use('/api/constituents',constituents)
app.use('/api/certrequests', certrequests)
app.use('/api/barangay', barangay)
app.use('/api/barangayofficials', barangayofficials)


const port = process.env.PORT || 3000
app.listen(port, (err)=>{
    console.log(`Server is running at port: ${port}`)
})