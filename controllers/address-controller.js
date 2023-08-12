const { AddressModel } = require("../models/address-model");

async function getAllAddresses(req, res) {
  const addresses = await AddressModel.find();
  res.json(addresses);
}

module.exports = { getAllAddresses };
