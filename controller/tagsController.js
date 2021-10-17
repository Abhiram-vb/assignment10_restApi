const tagSchema = require("../model/tagSchema");

const postTag = async(req,resp)=>{
    try{
        const data = req.body;
        const postData = new tagSchema(data)
        await postData.save();
        resp.send(postData)
    }
    catch(err){
        console.log(err)
    }
}

const getTag = async(req,resp)=>{
    try{
        const tagQuery = req.query;
        const data = await tagSchema.find(tagQuery);
        resp.send(data)
    }catch(err){
        console.log(err)
    }
}

const deleteTag = async(req,resp)=>{
    try{
        const {id} = req.params
        await tagSchema.deleteOne({_id:id})
        resp.send(`deleted succesfully`);
    }
    catch(err){
        console.log(err)
    }
}


const updateTag = async(req,resp)=>{
    try{
        const {id} = req.params;
        const data = req.body
        const updatedTag = await tagSchema.updateOne({_id:id},data)
        resp.send(updatedTag)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {postTag,getTag,deleteTag,updateTag}