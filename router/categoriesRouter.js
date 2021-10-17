const express = require("express");
const Router = express.Router();
const {getAllCategories,postIntoCategories,getCategoryById,deleteCategory,updateCategory} = require("../controller/categoriesController");

Router.get("/categories",getAllCategories);
Router.post("/categories",postIntoCategories);
Router.get("/categories/:id",getCategoryById);
Router.delete("/categories/:id",deleteCategory);
Router.put("/categories/:id",updateCategory)

module.exports = Router;