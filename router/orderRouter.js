const  {getOrders,postOrders,deleteOrders,updateOrder,getById} = require("../controller/orderController")
const express = require('express');
const Router = express.Router();

Router.get("/orders/:id",getById)
Router.get("/orders",getOrders);
Router.post("/orders",postOrders);
Router.delete("/orders/:id",deleteOrders)
Router.put("/orders/:id",updateOrder)

module.exports = Router; 