const { Router } = require("express");
const { addOrder, getOrdersByUserId } = require("../controllers/order-controller");
const orderRouter = Router();

orderRouter.get("/:userId", getOrdersByUserId);
orderRouter.post("/", addOrder);

module.exports = { orderRouter };
