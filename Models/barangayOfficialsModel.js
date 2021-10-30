const mongoose = require('mongoose')

const barangayOfficialsSchema = new mongoose.Schema({
    brgy_id: String,
    pic_url: String,
    fullname: String,
    dob: Date,
    age: Number,
    gender: String,
    religion: String,
    marital_status: String
  
})

module.exports = mongoose.model("barangay_officials", barangayOfficialsSchema, "barangay_officials")