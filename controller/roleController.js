const roleSchema = require("../model/roleSchema");
const postRole = async(req,resp)=>{
    const data = req.body;
    const newRole = new roleSchema(data);
    await newRole.save();
    resp.send(newRole)
}

const getRole = async(req,resp)=>{
    try{
        const query = req.query
        const queryParams = {...query}
        const roleData = await roleSchema.find(queryParams)
        resp.send(roleData)
    }
    catch(err){
        console.log(err)
    }
}

const getById = async(req,resp)=>{
    try{
        const {id} = req.params
        const query = req.query
        const queryParams = {...query,_id:id}
        const roleData = await roleSchema.find(queryParams)
        resp.send(roleData)
    }
    catch(err){
        console.log(err)
    }
}

const deleteRole = async(req,resp)=>{
    try{
        const {id} = req.params;
        await roleSchema.deleteOne({_id:id});
        resp.send("deleted successfully")
    }catch(err){
        console.log(err)
    }
}

const updateRole = async(req,resp)=>{
    try{
        const {id} = req.params
        const data = req.body;
        const newData = await roleSchema.updateOne({_id:id},data);
        resp.send(newData)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {postRole,getRole,deleteRole,getById,updateRole}