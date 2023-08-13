const { Router } = require("express");
const productRouter = Router();
const productController = require("../controllers/product-controller");

productRouter.get("/", productController.getAllProducts);
productRouter.post("/search", productController.getProductsByParameters);

module.exports = { productRouter };
