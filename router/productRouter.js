const  {getProducts,postProducts,deleteProducts,updateProduct} = require("../controller/productController")
const express = require('express');
const Router = express.Router();

Router.get("/products",getProducts);
Router.post("/products",postProducts);
Router.delete("/products/:id",deleteProducts)
Router.put("/products/:id",updateProduct)

module.exports = Router; 