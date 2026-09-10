import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Apps.css";

const Apps = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stockSymbol, setStockSymbol] = useState("RELIANCE");
  const [stocks, setStocks] = useState([]);

  // Fetch stocks from MongoDB
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("https://trade-nest-mswy.onrender.com/stocks");

        setStocks(response.data);
      } catch (err) {
        console.log("Error fetching stocks:", err);
        setError("Failed to fetch stocks");
      }
    };

    fetchStocks();
  }, []);

  // Fetch live stock data from Alpha Vantage
  const fetchStock = async () => {
    setLoading(true);
    setError("");
    setStockData(null);

    try {
      const selectedStock = stocks.find(
        (stock) => stock.symbol === stockSymbol
      );

      const apiSymbol = selectedStock
        ? selectedStock.apiSymbol
        : `${stockSymbol}.BSE`;

      const response = await axios.get(
        `https://trade-nest-mswy.onrender.com/stock/${apiSymbol}`
      );

      setStockData(response.data);
    } catch (err) {
      console.log("Error fetching stock:", err);
      setError("Failed to fetch stock data");
    }

    setLoading(false);
  };

  const apps = [
    {
      title: "Market Watch",
      description: "Track your favourite stocks and monitor their prices.",
      icon: "📊",
    },
    {
      title: "Stock Calculator",
      description: "Calculate your investment value, quantity and returns.",
      icon: "🧮",
    },
    {
      title: "Profit & Loss",
      description: "Analyse your portfolio performance and overall P&L.",
      icon: "📈",
    },
    {
      title: "Investment Planner",
      description: "Plan your investments and estimate potential returns.",
      icon: "💰",
    },
  ];

  return (
    <div className="apps-page">
      <div className="apps-header">
        <h2>Apps</h2>

        <p>
          Useful tools to help you manage and analyse your investments.
        </p>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon">{app.icon}</div>

            <div className="app-content">
              <h3>{app.title}</h3>

              <p>{app.description}</p>

              {index === 0 && (
                <>
                  <select
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                  >
                    {stocks.map((stock) => (
                      <option key={stock._id} value={stock.symbol}>
                        {stock.name}
                      </option>
                    ))}
                  </select>

                  <button type="button" onClick={fetchStock}>
                    Check Price
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <p className="stock-message">
          Loading stock data...
        </p>
      )}

      {error && (
        <p className="stock-error">
          {error}
        </p>
      )}

      {stockData && (
        <div className="stock-result">
          <h3>{stockData.symbol}</h3>

          <div className="stock-main-price">
            <span className="current-price">
              ₹{stockData.price.toFixed(2)}
            </span>

            <span
              className={
                stockData.change >= 0 ? "profit" : "loss"
              }
            >
              {stockData.change >= 0 ? "+" : ""}
              ₹{stockData.change.toFixed(2)}
            </span>

            <span
              className={
                stockData.changePercent >= 0
                  ? "profit"
                  : "loss"
              }
            >
              ({stockData.changePercent >= 0 ? "+" : ""}
              {stockData.changePercent.toFixed(2)}%)
            </span>
          </div>

          <div className="stock-details">
            <p>
              <span>Open</span>
              <strong>₹{stockData.open.toFixed(2)}</strong>
            </p>

            <p>
              <span>High</span>
              <strong>₹{stockData.high.toFixed(2)}</strong>
            </p>

            <p>
              <span>Low</span>
              <strong>₹{stockData.low.toFixed(2)}</strong>
            </p>

            <p>
              <span>Previous Close</span>
              <strong>₹{stockData.previousClose.toFixed(2)}</strong>
            </p>

            <p>
              <span>Volume</span>
              <strong>
                {stockData.volume.toLocaleString("en-IN")}
              </strong>
            </p>

            <p>
              <span>Trading Day</span>
              <strong>{stockData.latestTradingDay}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;