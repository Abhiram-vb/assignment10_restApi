const mongoose = require('mongoose');
const express = require('express');
const router = require("./router/userRouter")
const app = express();
app.use(express.json())
app.use(router)
mongoose.connect("mongodb://127.0.0.1:27017/restApi").then(()=>console.log("DB connected")).catch(err=>console.log(err))
app.get("/",(req,resp)=>{
    resp.send("Welcome to ValueBound")
})
app.listen("3000",()=>{console.log("server Started")})