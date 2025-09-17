import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [stockName, setStockName] = useState("");
  const [loading, setLoading] = useState(false);

  const { closeSellWindow, refreshHoldings } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      if (!stockName || stockQuantity <= 0 || stockPrice <= 0) {
        alert("⚠️ Please fill all fields properly.");
        return;
      }

      setLoading(true);

      const response = await axios.post("http://localhost:3002/newOrder", {
        stockName: stockName.trim().toUpperCase(),
        quantity: stockQuantity,
        price: stockPrice,
        orderType: "SELL",
        status: "PENDING",
        timestamp: new Date().toISOString(),
        uid: uid // include this if your backend requires identifying the user
      });

      alert(response.data.message || "✅ Sell order placed successfully!");

      // Refresh holdings after the sell order is placed
      refreshHoldings();

      // Close the sell window
      closeSellWindow();
    } catch (error) {
      console.error("Error while placing sell order:", error);
      if (error.response) {
        console.error("Backend responded with:", error.response.data);
        alert("❌ " + error.response.data.message || "Failed to sell stocks.");
      } else {
        alert("❌ Failed to sell stocks. Try again.");
      }
    }
  };

  return (
    <div className="sell-window">
      <h2>Sell Stock</h2>

      <div className="input-group">
        <label>Stock Name:</label>
        <input
          type="text"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
          placeholder="Enter stock symbol (e.g. INFY)"
        />
      </div>

      <div className="input-group">
        <label>Quantity:</label>
        <input
          type="number"
          min="1"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Price:</label>
        <input
          type="number"
          min="1"
          value={stockPrice}
          onChange={(e) => setStockPrice(Number(e.target.value))}
        />
      </div>

      <div className="button-group">
        <button
          className="btn btn-danger"
          onClick={handleSellClick}
          disabled={loading}
        >
          {loading ? "Processing..." : "Sell"}
        </button>
        <button
          className="btn btn-secondary"
          onClick={closeSellWindow}
          disabled={loading}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SellActionWindow;
