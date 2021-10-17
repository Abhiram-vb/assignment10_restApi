const express = require("express")
const Router = express.Router();
const {siginGet,signInPost,userAuthData} = require("../controller/signInController")

Router.get("/sigin",siginGet);
Router.post("/signin",signInPost);
Router.get("/signin/:data",userAuthData);

module.exports = Router