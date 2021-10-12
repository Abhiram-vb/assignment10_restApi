const express = require('express');
const Router = express.Router();
const {post_user,get_all_user,get_user_by_Id,delete_user_by_id,update_user_data} = require("../controller/userController")

Router.post("/users",post_user)
Router.get("/users",get_all_user)
Router.get("/users/:id",get_user_by_Id)
Router.delete("/users/:id",delete_user_by_id)
Router.put("/users/:id",update_user_data)
module.exports = Router