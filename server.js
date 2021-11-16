const express = require('express')
const app = express()
const cors = require('cors')
const constituents = require('./routes/constituents')
const certrequests = require('./routes/certrequests')
const barangay = require('./routes/barangay')
const barangayofficials = require('./routes/barangayOfficials')
const users = require('./routes/users')
const login = require('./routes/login')

require('./db')



// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });


// var allowedOrigins = ['http://localhost:4200'];
// app.use(cors({
//     origin: function(origin, callback){
//       // allow requests with no origin 
//       // (like mobile apps or curl requests)
//       if(!origin) return callback(null, true);
//       if(allowedOrigins.indexOf(origin) === -1){
//         var msg = 'The CORS policy for this site does not ' +
//                   'allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     }
//   }));


app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET, POST, OPTIONS, PUT, PATCH, DELETE'],
    credentials: true
    
}))

app.use(express.json())



app.use('/api/constituents',constituents)
app.use('/api/certrequests', certrequests)
app.use('/api/barangay', barangay)
app.use('/api/barangayofficials', barangayofficials)
app.use('/api/users', users)
app.use('/api/login', login)




const port = process.env.PORT || 3000
app.listen(port, (err)=>{
    console.log(`Server is running at port: ${port}`)
})