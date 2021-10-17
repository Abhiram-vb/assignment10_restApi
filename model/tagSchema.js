const mongoose = require("mongoose");
const tagSchema = mongoose.Schema({
    name:String,
    slug:String
});
const tag = mongoose.model("tag",tagSchema);
module.exports = tag 