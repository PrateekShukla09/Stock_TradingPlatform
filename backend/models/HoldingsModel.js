const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  stockName: { type: String, required: true },
  quantity: { type: Number, required: true },
  avgPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Holdings", HoldingsSchema);
