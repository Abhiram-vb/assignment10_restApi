const {logIn} = require("../controller/loginController");
const express = require('express');
const Router = express.Router();
Router.get("/login",logIn)

module.exports = Router;