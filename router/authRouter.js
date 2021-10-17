const express = require("express")
const Router = express.Router();
const {loginGet,siginGet,loginPost,loginDataGet} = require("../controller/authController")

Router.get("/login",loginGet);
Router.get("/sigin",siginGet);
Router.post("/login",loginPost);
Router.get("/login/:data",loginDataGet);

module.exports = Router