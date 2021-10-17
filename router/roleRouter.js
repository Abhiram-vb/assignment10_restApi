const express = require('express');
const Router = express.Router();
const {postRole,getRole,deleteRole,getById,updateRole} = require("../controller/roleController")

Router.post("/role",postRole)
Router.get("/role",getRole)
Router.get("/role/:id",getById)
Router.delete("/role/:id",deleteRole)
Router.put("/role/:id",updateRole)

module.exports = Router