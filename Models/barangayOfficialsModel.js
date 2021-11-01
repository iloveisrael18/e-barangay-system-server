const mongoose = require('mongoose')

const barangayOfficialsSchema = new mongoose.Schema({
    BarangayID: String,
    Position: String,
    LastName: String,
    FirstName: String,
    MiddleName: String,
    Suffix: String,
    Email_Address: String,
    Mobile_Number: String,
    Picture: String
})

module.exports = mongoose.model("barangay-officials", barangayOfficialsSchema, "barangay-officials")