const { Router } = require("express");
const productRouter = Router();
const productController = require("../controllers/product-controller");

productRouter.get("/", productController.getAllProducts);
productRouter.post("/search", productController.getProductsByParameters);
productRouter.post("/", productController.addProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.put("/:id", productController.updateProduct);

module.exports = { productRouter };
