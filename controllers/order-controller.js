const { OrderModel } = require("../models/order-model");
const { UserModel } = require("../models/user-model");

async function addOrder(req, res) {
  const { total, cart, userId } = req.body;
  const doc = await OrderModel.create({
    total,
    items: cart,
    userId,
  });

  res.json(doc);
}
async function getOrdersByUserId(req, res) {
  const { userId } = req.params;
  const isAdmin = (await UserModel.findOne({ _id: userId })).role === "admin";
  if (isAdmin) {
    const orders = await OrderModel.find();
    res.json(orders);
  } else {
    const orders = await OrderModel.find({ userId });
    res.json(orders);
  }
}

module.exports = { addOrder, getOrdersByUserId };
