const userSchema = require('../model/userSchema');

const postUser = async(req,resp)=>{
    try{
        const newUser = new userSchema(req.body)
        await newUser.save()
        resp.send(newUser)
    }
    catch(err){
        console.log(err)
    }
} 

const getAllUser = async(req,resp)=>{
    try{
        const query = req.query
        const users = await userSchema.find(query);
        resp.send(users)
    }
    catch(err){
        console.log(err)
    }
}

const getUserById = async(req,resp)=>{
    try{
        const query = req.query
        const {id} = req.params
        const queryParams = {...query,_id:id}
        const userData = await userSchema.find(queryParams)
        resp.send(userData)
    }
    catch(err){
        console.log(err)
    }
}

const deleteUserByd = async(req,resp)=>{
    try{
        const {id} = req.params;
        await userSchema.deleteOne({_id:id})
        resp.send("Deleted succesfully")
    }
    catch(err){
        console.log(err)
    }
    
}

const updateUserData = async(req,resp)=>{
    try{
        const {id} = req.params;
        const data = req.body
        const updatedData = await userSchema.updateOne({_id:id},data)
        resp.send(updatedData)
    }
    catch(err){
        console.log(err)
    }
}

module.exports={postUser,getAllUser,getUserById,deleteUserByd,updateUserData}