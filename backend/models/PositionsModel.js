const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  stockName: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  pnl: { type: Number, required: true }, // profit or loss
});

module.exports = mongoose.model("Positions", PositionsSchema);
