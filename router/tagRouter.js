const {postTag,getTag,deleteTag,updateTag} = require("../controller/tagsController")
const express = require("express");
const Router = express.Router();

Router.get("/tags",getTag);
Router.post("/tags",postTag);
Router.delete("/tags/:id",deleteTag);
Router.put("/tags/:id",updateTag);

module.exports = Router;