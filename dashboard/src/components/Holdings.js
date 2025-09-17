import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { VerticalGraph } from "./VerticalGraph";
import SentimentWidget from "./SentimentWidget";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { refreshHoldingsFlag } = useContext(GeneralContext);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allHoldings");
      setAllHoldings(res.data);
    } catch (err) {
      console.error("Failed to fetch holdings", err);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, [refreshHoldingsFlag]);

  const labels = allHoldings.map((stock) => stock.stockName || "-");

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.currentPrice || 0),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (sum, stock) =>
      sum + (stock.avgPrice || 0) * (stock.quantity || 0),
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) =>
      sum + (stock.currentPrice || 0) * (stock.quantity || 0),
    0
  );

  const totalPL = currentValue - totalInvestment;

  const totalPLPercent =
    totalInvestment > 0
      ? ((totalPL / totalInvestment) * 100).toFixed(2)
      : "0.00";

  const symbols = allHoldings.map((stock) => stock.stockName);
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No holdings available. Buy some stocks to get started!
                </td>
              </tr>
            ) : (
              allHoldings.map((stock, index) => {
                const avgPrice = stock.avgPrice || 0;
                const currentPrice = stock.currentPrice || 0;
                const quantity = stock.quantity || 0;

                const currValue = currentPrice * quantity;
                const isProfit = currValue - avgPrice * quantity >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.stockName || "-"}</td>
                    <td>{quantity}</td>
                    <td>{avgPrice.toFixed(2)}</td>
                    <td>{currentPrice.toFixed(2)}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {(currValue - avgPrice * quantity).toFixed(2)}
                    </td>
                    <td className={profClass}>
                      {stock.net || "0.00"}
                    </td>
                    <td className={dayClass}>
                      {stock.day || "0.00"}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPL >= 0 ? "profit" : "loss"}>
            {totalPL.toFixed(2)} ({totalPLPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
      <h3 className="title">Sentiment Analysis</h3>
      <SentimentWidget symbols={symbols} limit={5} />
    </>
  );
};

export default Holdings;
