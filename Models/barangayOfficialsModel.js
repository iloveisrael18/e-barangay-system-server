const mongoose = require('mongoose')

const barangayOfficialsSchema = new mongoose.Schema({
    REGION: String,
    PROVINCE: String,
    CITY_MUNICIPALITY: String,
    BARANGAY: String,
    POSITION: String,
    LASTNAME: String,
    FIRSTNAME: String,
    MIDDLENAME: String,
    SUFFIX: String,
    EMAIL: String,
    CONTACT: String,
    PICTURE: String
})

module.exports = mongoose.model("barangay-officials", barangayOfficialsSchema, "barangay-officials")