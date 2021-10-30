const mongoose= require('mongoose')

const barangaySchema = new mongoose.Schema({
    logo_url: String,
    picture_url: Array,
    province_name: String,
    city_municipality_name: String,
    brgy_name: String,
    brgy_address: String,
    brgy_contact: String
})

module.exports = mongoose.model("barangay", barangaySchema, "barangay")