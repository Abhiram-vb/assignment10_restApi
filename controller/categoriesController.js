const categoriesSchema = require("../model/categoriesSchema")

const getAllCategories = async(req,resp)=>{
    try{
        const categoriesQuery = req.query
        const allData = await categoriesSchema.find(categoriesQuery)
        resp.json(allData)
    }
    catch(err){
        console.log(err)
    }
}

const postIntoCategories = async(req,resp)=>{
    try{
        const data =req.body;
        const categories =  new categoriesSchema(data)
        await categories.save()
        resp.send(categories)
    }
    catch(err){
        console.log(err)
    }
}

const getCategoryById = async(req,resp)=>{
    try{
        const {id} = req.params
        const query = req.query
        const queryParams = {...query,_id:id}
        const categoriesData = await categoriesSchema.find(queryParams)
        resp.send(categoriesData)
    }
    catch(err){
        console.log(err)
    }
}

const deleteCategory= async(req,resp)=>{
    try{
        const {id} = req.params;
        await categoriesSchema.deleteOne({_id:id});
        resp.send("deleted successfully")
    }catch(err){
        console.log(err)
    }
}

const updateCategory = async(req,resp)=>{
    try{
        const {id} = req.params
        const data = req.body;
        const newData = await categoriesSchema.updateOne({_id:id},data);
        resp.send(newData)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getAllCategories,postIntoCategories,getCategoryById,deleteCategory,updateCategory}
