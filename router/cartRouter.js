const  {getCarts,postCarts,deleteCarts,updateCart,getById} = require("../controller/cartController")
const express = require('express');
const Router = express.Router();

Router.get("/carts/:id",getById)
Router.get("/carts",getCarts);
Router.post("/carts",postCarts);
Router.delete("/carts/:id",deleteCarts)
Router.put("/carts/:id",updateCart)

module.exports = Router; 