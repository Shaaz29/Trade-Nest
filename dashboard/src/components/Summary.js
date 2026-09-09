import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
  .get("http://localhost:3002/allHoldings", {
    headers: {
      Authorization:
        "Bearer " + localStorage.getItem("token"),
    },
  })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log("Error fetching holdings:", err);
      });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0
  );

  const profitLoss = currentValue - totalInvestment;

  const profitLossPercentage =
    totalInvestment > 0
      ? (profitLoss / totalInvestment) * 100
      : 0;

  const profitClass = profitLoss >= 0 ? "profit" : "loss";

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>

            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profitClass}>
              {profitLoss.toFixed(2)}
              <small>
                {" "}
                ({profitLossPercentage.toFixed(2)}%)
              </small>
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment{" "}
              <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;