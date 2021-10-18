const cartSchema = require("../model/cartSchema");

const getCarts = async(req,resp)=>{
    try{
        const cartQuery = req.query;
        const carts = await cartSchema.find(cartQuery);
        resp.send(carts)
    }
    catch(err){
        console.log(err)
    }
}

const getById = async(req,resp)=>{
    try{
        const {id} = req.params;
        const data = await cartSchema.find({_id:id});
        resp.send(data)
    }
    catch(err){
        console.log(err)
    }
}

const postCarts = async(req,resp)=>{
    try{
        const data = req.body;
        const postCart = new cartSchema(data);
        await postCart.save();
        resp.send(postCart)
    }
    catch(err){
        console.log(err)
    }
}

const deleteCarts = async(req,resp)=>{
    try{
        const {id} = req.params
        await cartSchema.deleteOne({_id:id});
        resp.send("deleted succesfully") 
    }
    catch(err){
        console.log(err)
    }
}

const updateCart = async(req,resp)=>{
    try{
        const {id} = req.params;
        const cart = req.body
        const updatedCart = await cartSchema.updateOne({_id:id},cart)
        resp.send(updatedCart)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getCarts,postCarts,deleteCarts,updateCart,getById};