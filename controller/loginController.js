const signInSchema = require("../model/signInSchema")
const bcrypt = require("bcrypt")

const logIn = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const isEmailPresent = await signInSchema.find({email:email})
        if(isEmailPresent.length>0){
            const pass = await bcrypt.compare(password,isEmailPresent[0].password)
            if(pass){
                res.status(200).json("login Successfull")
            }
            else{
                res.status(400).json("wrong password")
            }
        }
        else{
            res.status(400).json("user not exist plz register")
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {logIn}