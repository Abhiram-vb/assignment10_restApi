const {logout}= require("../controller/logoutController");
const express = require("express");
const Router = express.Router();

Router.get("/logout",logout);
module.exports = Router;