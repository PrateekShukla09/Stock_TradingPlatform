import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/newOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Order Type</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id || index}>
                  <td>{order.stockName}</td>
                  <td>{order.quantity}</td>
                  <td>{Number(order.price).toFixed(2)}</td>
                  <td
                    style={{
                      color: order.orderType === "BUY" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {order.orderType}
                  </td>
                  <td>{order.status}</td>
                  <td>{new Date(order.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;
