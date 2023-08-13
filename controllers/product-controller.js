const { ProductModel } = require("../models/product-model");

async function getAllProducts(req, res) {
  const products = await ProductModel.find();
  res.json({ products });
}

async function getProductsByParameters(req, res) {
  const { light, size, category, searchValue } = req.body;
  const query = {};
  if (searchValue) {
    query.name = { $regex: searchValue, $options: "i" };
  }
  if (category) {
    query.category = { $regex: category, $options: "i" };
  }
  if (size) {
    query.size = { $regex: size, $options: "i" };
  }
  if (light) {
    query.light = { $regex: light, $options: "i" };
  }
  console.log(query);
  const products = await ProductModel.find(query);
  res.json({ products });
}

module.exports = { getAllProducts, getProductsByParameters };
