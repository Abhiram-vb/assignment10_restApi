const logout = async(req,res)=>{
    try{
        res.send("logged out successfully")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {logout}