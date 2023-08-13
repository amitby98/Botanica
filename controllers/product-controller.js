const { ProductModel } = require("../models/product-model");

async function getPlantCounts() {
  try {
    const aggregationResult = await ProductModel.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    return aggregationResult;
  } catch (error) {
    console.error(error);
  }
}

async function getAllProducts(req, res) {
  const products = await ProductModel.find();
  const categoryCount = await getPlantCounts();
  res.json({ products, categoryCount });
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

async function addProduct(req, res) {
  const { nameValue, priceValue, category, size, light, imageUrl } = req.body;
  const newProduct = new ProductModel({
    name: nameValue,
    price: priceValue,
    category,
    size,
    light,
    imageUrl,
  });
  try {
    await newProduct.save();
    res.json({ message: "Product Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete(id);
    res.json({ message: "Product Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  console.log("id", id);
  const { name } = req.body;
  console.log("name", name);
  try {
    await ProductModel.findByIdAndUpdate(id, { name });
    res.json({ message: "Product Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
}
module.exports = {
  getAllProducts,
  getProductsByParameters,
  addProduct,
  deleteProduct,
  updateProduct,
};
