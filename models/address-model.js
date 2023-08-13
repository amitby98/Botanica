const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const AddressModel = mongoose.model("addresses", addressSchema);

module.exports = { AddressModel };

function add() {
  const cities = [
    { name: "Jerusalem", lat: 31.784482, lng: 35.212371 },
    { name: "Tel Aviv", lat: 32.077275, lng: 34.773655 },
    { name: "Haifa", lat: 32.802092, lng: 34.987301 },
  ];

  for (const city of cities) {
    AddressModel.create(city);
  }
}

//add();
