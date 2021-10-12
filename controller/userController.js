const userSchema = require('../model/userSchema');

const post_user = async(req,resp)=>{
    try{
        const newUser = new userSchema(req.body)
        await newUser.save()
        resp.send(newUser)
        resp.status(201)
    }
    catch(err){
        console.log(err)
    }
} 

const get_all_user = async(req,resp)=>{
    const users = await userSchema.find();
    resp.send(users)
}

const get_user_by_Id = async(req,resp)=>{
    const {id} = req.params
    const userData = await userSchema.find({_id:id})
    resp.send(userData)
}

const delete_user_by_id = async(req,resp)=>{
    const {id} = req.params;
    const deleteuser = await userSchema.deleteOne({_id:id})
    console.log(deleteuser)
    resp.send("Deleted succesfully")
}

const update_user_data = async(req,resp)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await userSchema.updateOne({_id:id},data)
    resp.send(updatedData)
}

module.exports={post_user,get_all_user,get_user_by_Id,delete_user_by_id,update_user_data}