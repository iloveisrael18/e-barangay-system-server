const mongoose= require('mongoose')

const barangaySchema = new mongoose.Schema({
  REGION: String,
  PROVINCE: String,
  CITY_MUNICIPALITY: String,
  BARANGAY: String,
  BARANGAYID: String,
  ADDRESS: String,
  LANDLINE_NUMBER: String,
  MOBILE_NUMBER: String,
  LOGO: String
})

module.exports = mongoose.model("barangay", barangaySchema, "barangay")