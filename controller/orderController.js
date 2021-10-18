const orderSchema = require("../model/orderSchema");

const getOrders = async(req,resp)=>{
    try{
        const orderQuery = req.query;
        const orders = await orderSchema.find(orderQuery);
        resp.send(orders)
    }
    catch(err){
        console.log(err)
    }
}

const getById = async(req,resp)=>{
    try{
        const {id} = req.params;
        const data = await orderSchema.find({_id:id});
        resp.send(data)
    }
    catch(err){
        console.log(err)
    }
}

const postOrders = async(req,resp)=>{
    try{
        const data = req.body;
        const postOrder = new orderSchema(data);
        await postOrder.save();
        resp.send(postOrder)
    }
    catch(err){
        console.log(err)
    }
}

const deleteOrders = async(req,resp)=>{
    try{
        const {id} = req.params
        await orderSchema.deleteOne({_id:id});
        resp.send("deleted succesfully") 
    }
    catch(err){
        console.log(err)
    }
}

const updateOrder = async(req,resp)=>{
    try{
        const {id} = req.params;
        const order = req.body
        const updatedOrder = await orderSchema.updateOne({_id:id},order)
        resp.send(updatedOrder)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getOrders,postOrders,deleteOrders,updateOrder,getById};