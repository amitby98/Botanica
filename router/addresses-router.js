const { Router } = require("express");
const { getAllAddresses } = require("../controllers/address-controller");
const addressRouter = Router();

addressRouter.get("/", getAllAddresses);

module.exports = { addressRouter };
