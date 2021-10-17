const mongoose = require("mongoose")
const roleSchema = mongoose.Schema({
    name:String,
    slug:String,
})
const role = mongoose.model("role",roleSchema)
module.exports = role