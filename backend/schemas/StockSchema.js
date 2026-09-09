const { Schema } = require("mongoose");

const StockSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    symbol: {
      type: String,
      required: true,
      unique: true,
    },

    apiSymbol: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },

    percent: {
      type: String,
      default: "0.00%",
    },

    isDown: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { StockSchema };