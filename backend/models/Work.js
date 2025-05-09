
const mongoose = require("mongoose")

const workSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
})

module.exports = mongoose.model("Work", workSchema)
