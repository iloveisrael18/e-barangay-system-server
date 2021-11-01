const mongoose= require('mongoose')

const barangaySchema = new mongoose.Schema({
  Region: String,
  Province: String,
  City_Municipality: String,
  Barangay: String,
  Adress: String,
  landline_Number: String,
  Mobile_Number: String
})

module.exports = mongoose.model("barangay", barangaySchema, "barangay")