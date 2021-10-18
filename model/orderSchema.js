const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    users_id:String,
    total_items:Number,
    products:Array,
    billing_address:String,
    shipping_address:String,
    transaction_status:{
        type:String,
        enum:["Success","Pending","Failed"],
    },
    payment_mode:{
        type:String,
        enum:["Upi","Card","Cod"],
    },
    payment_status:{
        type:String,
        enum:["Done","Rejected","Waiting"],
    },
    order_status:{
        type:String,
        enum:["In Transit","Dispatch","Recieved"]
    }
})

const order = mongoose.model("order",orderSchema);
module.exports = order;