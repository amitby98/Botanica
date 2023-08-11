const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    items: {
      type: Object,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = { OrderModel };
