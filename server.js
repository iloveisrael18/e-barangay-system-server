const express = require('express')
const app = express()
const cors = require('cors')
const constituents = require('./routes/constituents')
const certrequests = require('./routes/certrequests')
const barangay = require('./routes/barangay')
const barangayofficials = require('./routes/barangayOfficials')

require('./db')



app.use(cors({
    origin: '*'
}))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use(express.json())
app.use('/api/constituents',constituents)
app.use('/api/certrequests', certrequests)
app.use('/api/barangay', barangay)
app.use('/api/barangayofficials', barangayofficials)


const port = process.env.PORT || 3000
app.listen(port, (err)=>{
    console.log(`Server is running at port: ${port}`)
})