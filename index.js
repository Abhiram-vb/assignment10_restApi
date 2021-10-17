const mongoose = require('mongoose');
const express = require('express');
const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter");
const roleRouter = require("./router/roleRouter");
const categoryRouter = require("./router/categoriesRouter");
const tagRouter = require('./router/tagRouter');
const productRouter = require("./router/productRouter");

const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/restApi").then(()=>console.log("DB connected")).catch(err=>console.log(err))

app.use(userRouter);
app.use(roleRouter);
app.use(authRouter);
app.use(categoryRouter);
app.use(tagRouter);
app.use(productRouter);
app.get("/",(req,resp)=>{
    resp.send("Welcome to ValueBound")
})
app.listen("3000",()=>{console.log("http://localhost:3000")})