const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:String,
    thumbnail:String,
    product_gallery:Array,
    description:String,
    base_price:Number,
    sell_price:Number,
    category_name:String,
    tags:Array,
    additional_information:String
})

const product = mongoose.model("product",productSchema)

module.exports = product