const mongoose = require('mongoose')


const certrequests = new mongoose.Schema({

    hidno: String,
    requestorname: String,
    certtype: String,
    requestdate: Date,
    daterecieved: Date

})

module.exports = mongoose.model("certrequests", certrequests, "certrequests")