const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  stockName: { type: String, required: true },
  quantity: { type: Number, required: true },
  orderType: { type: String, enum: ["BUY", "SELL"], required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ["PENDING", "COMPLETED", "CANCELLED"], default: "PENDING" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Orders", OrdersSchema);
