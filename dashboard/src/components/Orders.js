import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

useEffect(() => {
  axios
    .get("https://trade-nest-mswy.onrender.com/allOrders", {
      headers: {
        Authorization:
          "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setOrders(res.data);
    })
    .catch((err) => {
      console.log("Error fetching orders:", err);
    });
}, []);

  return (
    <div className="orders-page">
      <h2>Orders</h2>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="stock-name">{order.name}</td>

                  <td>{order.qty}</td>

                  <td>₹{Number(order.price).toFixed(2)}</td>

                  <td>
                    <span
                      className={
                        order.mode === "BUY"
                          ? "order-badge buy"
                          : "order-badge sell"
                      }
                    >
                      {order.mode}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;