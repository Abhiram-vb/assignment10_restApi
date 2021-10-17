const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const signInSchema = mongoose.Schema({
    "email":{
        type:String,
        required:[true,"enter email"],
        unique:true,
        lowercase:true,
    },
    "password":{
        type:String,
        required:[true,"enter password"],
        unique:true,
        minlength:[6,"minimum length is 6"]
    }
})
signInSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
const signIn = mongoose.model("authentication",signInSchema)

module.exports = signIn;