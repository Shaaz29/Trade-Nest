require("dotenv").config();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const authMiddleware = require("./middleware/authMiddleware");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");
const { UserModel } = require("./model/UserModel");
const { FundsModel } = require("./model/FundsModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { StockModel } = require("./model/StockModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ==================== ADD HOLDINGS ====================

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 1867.70,
//       net: "+247.12%",
//       day: "-0.07%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.40,
//       price: 715.05,
//       net: "-48.28%",
//       day: "+0.07%",
//       isLoss: true,
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 1975.90,
//       net: "-15.41%",
//       day: "+1.01%",
//       isLoss: true,
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.50,
//       price: 1132.20,
//       net: "-16.16%",
//       day: "0.28%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.00,
//       price: 265.30,
//       net: "+31.34%",
//       day: "+1.20%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.30,
//       price: 581.85,
//       net: "+132.50%",
//       day: "-0.28%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.90,
//       price: 3166.10,
//       net: "+290.94%",
//       day: "+0.15%",
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.70,
//       price: 1330.40,
//       net: "-39.33%",
//       day: "+0.61%",
//       isLoss: true,
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 1024.50,
//       net: "+215.86%",
//       day: "+0.57%",
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.00,
//       price: 4719.00,
//       net: "-0.17%",
//       day: "+0.15%",
//       isLoss: true,
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.20,
//       price: 368.10,
//       net: "+253.26%",
//       day: "+0.85%",
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.70,
//       price: 2320.75,
//       net: "-23.71%",
//       day: "+0.61%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.30,
//       price: 177.55,
//       net: "-63.70%",
//       day: "+0.54%",
//       isLoss: true,
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newHolding.save();
//   });

//   res.send("Holdings added successfully");
// });

// ==================== GET ALL HOLDINGS ====================

app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({
      userId: req.user.id,
    });

    res.json(allHoldings);
  } catch (err) {
    console.log("Error fetching holdings:", err);

    res.status(500).json({
      error: "Failed to fetch holdings",
    });
  }
});

// ==================== ADD POSITIONS ====================

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 319.40,
//       net: "+0.99%",
//       day: "+0.02%",
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 481.85,
//       net: "-84.58%",
//       day: "-0.22%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });

//   res.send("Positions added successfully");
// });

// ==================== GET ALL POSITIONS ====================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.log("Error fetching positions:", err);
    res.status(500).json({
      error: "Failed to fetch positions",
    });
  }
});

// ==================== NEW ORDER ====================

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Check required fields
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({
        message: "All order fields are required",
      });
    }

    const quantity = Number(qty);
    const orderPrice = Number(price);
    const orderMode = mode.toUpperCase();

    // Validate quantity and price
    if (quantity <= 0 || orderPrice <= 0) {
      return res.status(400).json({
        message: "Quantity and price must be greater than 0",
      });
    }

    // Find logged-in user's funds
    const funds = await FundsModel.findOne({
      userId: req.user.id,
    });

    if (!funds) {
      return res.status(404).json({
        message: "Funds account not found",
      });
    }

    // Calculate total order value
    const orderValue = quantity * orderPrice;

    // ==================== BUY ORDER ====================

    if (orderMode === "BUY") {
      // Check available cash
      if (orderValue > funds.availableCash) {
        return res.status(400).json({
          message: `Insufficient funds. Required ₹${orderValue.toFixed(
            2,
          )}, but available cash is ₹${funds.availableCash.toFixed(2)}`,
        });
      }

      // Deduct money from funds
      funds.availableCash -= orderValue;
      funds.availableMargin -= orderValue;

      // Increase used margin
      funds.usedMargin += orderValue;

      await funds.save();

      // ==================== UPDATE HOLDINGS ====================

      const existingHolding = await HoldingsModel.findOne({
        userId: req.user.id,
        name: name,
      });

      if (existingHolding) {
        // Existing stock → increase quantity
        const oldQty = existingHolding.qty;
        const oldAvg = existingHolding.avg;

        const newQty = oldQty + quantity;

        // Calculate new average price
        const newAvg = (oldQty * oldAvg + quantity * orderPrice) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;
        existingHolding.price = orderPrice;

        await existingHolding.save();
      } else {
        // First time buying this stock
        const newHolding = new HoldingsModel({
          userId: req.user.id,
          name: name,
          qty: quantity,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00",
          day: "0.00",
        });

        await newHolding.save();
      }
    }

    // ==================== SELL ORDER ====================
    else if (orderMode === "SELL") {
      // ==================== CHECK HOLDING ====================

      const existingHolding = await HoldingsModel.findOne({
        userId: req.user.id,
        name: name,
      });

      // User doesn't own this stock
      if (!existingHolding) {
        return res.status(400).json({
          message: `You don't own ${name}`,
        });
      }

      // Check available quantity
      if (quantity > existingHolding.qty) {
        return res.status(400).json({
          message: `Insufficient quantity. You own ${existingHolding.qty} share(s)`,
        });
      }

      // ==================== UPDATE HOLDING ====================

      existingHolding.qty -= quantity;

      // If all shares are sold, remove the holding
      if (existingHolding.qty === 0) {
        await HoldingsModel.deleteOne({
          _id: existingHolding._id,
        });
      } else {
        existingHolding.price = orderPrice;

        await existingHolding.save();
      }

      // ==================== ADD MONEY TO FUNDS ====================

      funds.availableCash += orderValue;
      funds.availableMargin += orderValue;

      // Reduce used margin
      funds.usedMargin -= orderValue;

      // Prevent negative used margin
      if (funds.usedMargin < 0) {
        funds.usedMargin = 0;
      }

      await funds.save();
    } else {
      return res.status(400).json({
        message: "Invalid order mode",
      });
    }

    // Create order for the logged-in user
    const newOrder = new OrdersModel({
      userId: req.user.id,
      name: name,
      qty: quantity,
      price: orderPrice,
      mode: orderMode,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
      orderValue: orderValue,
    });
  } catch (err) {
    console.log("Error adding order:", err);

    res.status(500).json({
      message: "Failed to place order",
    });
  }
});

// ==================== GET USER ORDERS ====================

app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(allOrders);
  } catch (err) {
    console.log("Error fetching orders:", err);

    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});

// ==================== USER SIGNUP ====================

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if username already exists
    const existingUsername = await UserModel.findOne({
      username: username,
    });

    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // Check if email already exists
    const existingEmail = await UserModel.findOne({
      email: email,
    });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UserModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Save user
    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
    });
  } catch (err) {
    console.log("Signup error:", err);

    res.status(500).json({
      message: "Server error during signup",
    });
  }
});

// ==================== USER LOGIN ====================

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check fields
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    // Find user
    const user = await UserModel.findOne({
      username: username,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    // Compare password with hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    // Send token and user information
    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("Login error:", err);

    res.status(500).json({
      message: "Server error during login",
    });
  }
});

// ==================== USER PROFILE ====================

app.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user: user,
    });
  } catch (err) {
    console.log("Profile error:", err);

    res.status(500).json({
      message: "Failed to fetch profile",
    });
  }
});

app.get("/funds", authMiddleware, async (req, res) => {
  try {
    let funds = await FundsModel.findOne({
      userId: req.user.id,
    });

    // Create default funds for the user if they don't have a funds record yet
    if (!funds) {
      funds = await FundsModel.create({
        userId: req.user.id,
        availableMargin: 0,
        usedMargin: 0,
        availableCash: 0,
        openingBalance: 0,
        payin: 0,
        span: 0,
        deliveryMargin: 0,
        exposure: 0,
        optionsPremium: 0,
        collateralLiquidFunds: 0,
        collateralEquity: 0,
        totalCollateral: 0,
      });
    }

    res.json(funds);
  } catch (error) {
    console.log("Error fetching funds:", error);
    res.status(500).json({
      message: "Error fetching funds",
    });
  }
});

app.post("/addFunds", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        message: "Please enter a valid amount",
      });
    }

    const funds = await FundsModel.findOne({
      userId: req.user.id,
    });

    if (!funds) {
      return res.status(404).json({
        message: "Funds account not found",
      });
    }

    funds.availableMargin += Number(amount);
    funds.availableCash += Number(amount);
    funds.openingBalance += Number(amount);
    funds.payin += Number(amount);

    await funds.save();

    res.json({
      message: "Funds added successfully",
      funds,
    });
  } catch (error) {
    console.log("Error adding funds:", error);

    res.status(500).json({
      message: "Error adding funds",
    });
  }
});

app.post("/withdrawFunds", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        message: "Please enter a valid amount",
      });
    }

    const funds = await FundsModel.findOne({
      userId: req.user.id,
    });

    if (!funds) {
      return res.status(404).json({
        message: "Funds account not found",
      });
    }

    if (Number(amount) > funds.availableCash) {
      return res.status(400).json({
        message: "Insufficient available cash",
      });
    }

    funds.availableMargin -= Number(amount);
    funds.availableCash -= Number(amount);
    funds.openingBalance -= Number(amount);

    await funds.save();

    res.json({
      message: "Funds withdrawn successfully",
      funds,
    });
  } catch (error) {
    console.log("Error withdrawing funds:", error);

    res.status(500).json({
      message: "Error withdrawing funds",
    });
  }
});

app.get("/stocks", async (req, res) => {
  try {
    const stocks = await StockModel.find().sort({ name: 1 });

    res.json(stocks);
  } catch (err) {
    console.log("Error fetching stocks:", err);

    res.status(500).json({
      message: "Failed to fetch stocks",
    });
  }
});

app.get("/stock/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;

    const stock = await StockModel.findOne({ apiSymbol: symbol });

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: symbol,
        apikey: process.env.ALPHA_VANTAGE_API_KEY,
      },
    });

    const quote = response.data["Global Quote"];

    if (!quote || !quote["05. price"]) {
      return res.json({
        symbol: stock.apiSymbol,
        price: Number(stock.price),
        change: 0,
        changePercent: Number(String(stock.percent).replace("%", "")),
        open: Number(stock.price),
        high: Number(stock.price),
        low: Number(stock.price),
        volume: 0,
        latestTradingDay: "N/A",
        previousClose: Number(stock.price),
      });
    }

    const stockData = {
      symbol: quote["01. symbol"],
      price: Number(quote["05. price"]),
      change: Number(quote["09. change"]),
      changePercent: Number(quote["10. change percent"].replace("%", "")),
      open: Number(quote["02. open"]),
      high: Number(quote["03. high"]),
      low: Number(quote["04. low"]),
      volume: Number(quote["06. volume"]),
      latestTradingDay: quote["07. latest trading day"],
      previousClose: Number(quote["08. previous close"]),
    };

    console.log("Clean stock data:", stockData);

    res.json(stockData);
  } catch (err) {
    console.log("Alpha Vantage error:", err.message);

    res.status(500).json({
      message: "Failed to fetch stock data",
    });
  }
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  mongoose
    .connect(URL)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log("MongoDB connection error:", err);
    });
});
