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

orderSchema.methods.getFormattedCreatedAt = function () {
  return moment(this.createdAt).format("DD/MM/YYYY HH:mm:ss");
};

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = { OrderModel };
