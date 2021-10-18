const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    product:String,
    user:String,
    product_qty:String,
    base_price:Number,
    sell_price:Number,
    total_price:Number
})

const cart = mongoose.model("cart",cartSchema);
module.exports = cart;