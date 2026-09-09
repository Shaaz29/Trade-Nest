const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    availableMargin: {
      type: Number,
      default: 0,
    },

    usedMargin: {
      type: Number,
      default: 0,
    },

    availableCash: {
      type: Number,
      default: 0,
    },

    openingBalance: {
      type: Number,
      default: 0,
    },

    payin: {
      type: Number,
      default: 0,
    },

    span: {
      type: Number,
      default: 0,
    },

    deliveryMargin: {
      type: Number,
      default: 0,
    },

    exposure: {
      type: Number,
      default: 0,
    },

    optionsPremium: {
      type: Number,
      default: 0,
    },

    collateralLiquidFunds: {
      type: Number,
      default: 0,
    },

    collateralEquity: {
      type: Number,
      default: 0,
    },

    totalCollateral: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { FundsSchema };