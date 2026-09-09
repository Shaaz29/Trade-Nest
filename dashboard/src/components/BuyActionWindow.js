import React, { useContext, useState } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");

  const handleOrderClick = async () => {
    setError("");

    const quantity = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!quantity || quantity <= 0) {
      setError("Please enter a valid quantity");
      return;
    }

    if (!price || price <= 0) {
      setError("Please enter a valid price");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: quantity,
          price: price,
          mode: mode,
        },
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      alert(response.data.message);

      closeBuyWindow();

    } catch (error) {
      console.log("Error placing order:", error);

      setError(
        error.response?.data?.message ||
          "Failed to place order"
      );
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const marginRequired =
    Number(stockQuantity) * Number(stockPrice);

  return (
    <div
      className="container"
      id="buy-window"
    >
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
              value={stockPrice}
            />
          </fieldset>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "10px",
              marginBottom: "0",
            }}
          >
            {error}
          </p>
        )}
      </div>

      <div className="buttons">
        <span>
          {mode === "SELL"
            ? `Order value ₹${marginRequired.toFixed(2)}`
            : `Margin required ₹${marginRequired.toFixed(2)}`}
        </span>

        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleOrderClick}
          >
            {mode === "SELL" ? "Sell" : "Buy"}
          </button>

          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;