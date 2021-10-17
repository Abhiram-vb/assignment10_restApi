const express = require('express');
const Router = express.Router();
const {postUser,getAllUser,getUserById,deleteUserByd,updateUserData} = require("../controller/userController")

Router.post("/users",postUser)
Router.get("/users",getAllUser)
Router.get("/users/:id",getUserById)
Router.delete("/users/:id",deleteUserByd)
Router.put("/users/:id",updateUserData)
module.exports = Router 