const mongoose = require('mongoose')


const constituents = new mongoose.Schema({
    imgurl: {
        type: String,
        default: null
    },
    hidno: {
        type: String,
        default: null
    },
    fname: {
        type: String,
        default: null
    },
    mname: {
        type: String,
        default: null
    },
    lname: {
        type: String,
        default: null
    },
    suffix: {
        type: String,
        default: null
    },
    contactno: {
        type: String,
        default: null
    },
    bdate: {
        type: Date,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    mstatus: {
        type: String,
        default: null
    },
    houseno: {
        type: String,
        default: null
    },
    purok: {
        type: String,
        default: null
    },
    street: {
        type: String,
        default: null
    },
    resyear: {
        type: String,
        default: null
    },
    resfrom: {
        type: Date,
        default: null
    },
    resto: {
        type: Date,
        default: null
    },
    

})


module.exports = mongoose.model('constituents', constituents, 'constituents')