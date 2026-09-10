import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdrawFunds, setShowWithdrawFunds] = useState(false);
  const [amount, setAmount] = useState("");

  const fetchFunds = async () => {
    try {
      const response = await axios.get(
        "https://trade-nest-mswy.onrender.com/funds",
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      setFunds(response.data);
    } catch (error) {
      console.log("Error fetching funds:", error);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  // ADD FUNDS
  const handleAddFunds = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(
        "https://trade-nest-mswy.onrender.com/addFunds",
        {
          amount: Number(amount),
        },
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      alert(response.data.message);

      setAmount("");
      setShowAddFunds(false);

      fetchFunds();
    } catch (error) {
      console.log("Error adding funds:", error);

      alert(
        error.response?.data?.message ||
          "Failed to add funds"
      );
    }
  };

  // WITHDRAW FUNDS
  const handleWithdrawFunds = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (Number(amount) > funds.availableCash) {
      alert("Insufficient available cash");
      return;
    }

    try {
      const response = await axios.post(
        "https://trade-nest-mswy.onrender.com/withdrawFunds",
        {
          amount: Number(amount),
        },
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      alert(response.data.message);

      setAmount("");
      setShowWithdrawFunds(false);

      fetchFunds();
    } catch (error) {
      console.log("Error withdrawing funds:", error);

      alert(
        error.response?.data?.message ||
          "Failed to withdraw funds"
      );
    }
  };

  if (!funds) {
    return <p>Loading funds...</p>;
  }

  return (
    <>
      {/* Funds Buttons */}
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>

        <button
          className="btn btn-green"
          onClick={() => {
            setAmount("");
            setShowAddFunds(true);
          }}
        >
          Add funds
        </button>

        <button
          className="btn btn-blue"
          onClick={() => {
            setAmount("");
            setShowWithdrawFunds(true);
          }}
        >
          Withdraw
        </button>
      </div>

      {/* ADD FUNDS POPUP */}
      {showAddFunds && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "350px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h3>Add Funds</h3>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "15px",
                marginBottom: "15px",
                boxSizing: "border-box",
              }}
            />

            <button
              className="btn btn-green"
              onClick={handleAddFunds}
            >
              Add
            </button>

            <button
              className="btn btn-blue"
              onClick={() => {
                setShowAddFunds(false);
                setAmount("");
              }}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* WITHDRAW FUNDS POPUP */}
      {showWithdrawFunds && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "350px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h3>Withdraw Funds</h3>

            <p>
              Available cash: ₹
              {funds.availableCash.toFixed(2)}
            </p>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "15px",
                marginBottom: "15px",
                boxSizing: "border-box",
              }}
            />

            <button
              className="btn btn-blue"
              onClick={handleWithdrawFunds}
            >
              Withdraw
            </button>

            <button
              className="btn btn-green"
              onClick={() => {
                setShowWithdrawFunds(false);
                setAmount("");
              }}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* EQUITY + COMMODITY */}
      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                {funds.availableMargin.toFixed(2)}
              </p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="imp">
                {funds.usedMargin.toFixed(2)}
              </p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="imp">
                {funds.availableCash.toFixed(2)}
              </p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Payin</p>
              <p>{funds.payin.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>SPAN</p>
              <p>{funds.span.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Delivery margin</p>
              <p>{funds.deliveryMargin.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Exposure</p>
              <p>{funds.exposure.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Options premium</p>
              <p>{funds.optionsPremium.toFixed(2)}</p>
            </div>

            <hr />

            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>
                {funds.collateralLiquidFunds.toFixed(2)}
              </p>
            </div>

            <div className="data">
              <p>Collateral (Equity)</p>
              <p>
                {funds.collateralEquity.toFixed(2)}
              </p>
            </div>

            <div className="data">
              <p>Total Collateral</p>
              <p>{funds.totalCollateral.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>

            <Link className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;