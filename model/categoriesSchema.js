const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name:String,
    slug:String,
    image:String,
    description:String
})
const categories = mongoose.model("category",categoriesSchema);
module.exports = categories