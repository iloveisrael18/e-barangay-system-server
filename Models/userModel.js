const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    BARANGAYID: {
        type: String,
        default: null
    },
    HID: {
        type: String,
        default: null
    },
    FIRSTNAME: {
        type: String,
        uppercase: true,
        default: null
    },
    MIDDLENAME: {
        type: String,
        uppercase: true,
        default: null
    },
    LASTNAME: {
        type: String,
        uppercase: true,
        default: null
    },
    EMAIL: {
        type: String,
        uppercase: true,
        default: null
    },
    PASSWORD: {
        type: String,
        default: null
    },
    USERTYPE: {
        type: Number,
        default: 0
    },
})


module.exports = mongoose.model("users", userSchema, "users")