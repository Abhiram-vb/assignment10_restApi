const productSchema = require("../model/productSchema");

const getProducts = async(req,resp)=>{
    try{
        const productQuery = req.query;
        const products = await productSchema.find(productQuery);
        resp.send(products)
    }
    catch(err){
        console.log(err)
    }
}

const getById = async(req,resp)=>{
    try{
        const {id} = req.params;
        const data = await productSchema.find({_id:id});
        resp.send(data)
    }
    catch(err){
        console.log(err)
    }
}

const postProducts = async(req,resp)=>{
    try{
        const data = req.body;
        const postProduct = new productSchema(data);
        await postProduct.save();
        resp.send(postProduct)
    }
    catch(err){
        console.log(err)
    }
}

const deleteProducts = async(req,resp)=>{
    try{
        const {id} = req.params
        await productSchema.deleteOne({_id:id});
        resp.send("deleted succesfully") 
    }
    catch(err){
        console.log(err)
    }
}

const updateProduct = async(req,resp)=>{
    try{
        const {id} = req.params;
        const product = req.body
        const updatedProduct = await productSchema.updateOne({_id:id},product)
        resp.send(updatedProduct)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getProducts,postProducts,deleteProducts,updateProduct,getById};