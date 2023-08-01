const { ProductModel } = require("../models/product-model");

async function getAllProducts(req, res) {
  const products = await ProductModel.find();
  res.json({ products });
}

async function getProductsByParameters(req, res) {
  const { size, type, searchValue } = req.body;
  const products = await ProductModel.find({
    name: { $regex: searchValue, $options: "i" },
    type,
    size,
  });
  res.json({ products });
}

module.exports = { getAllProducts, getProductsByParameters };
