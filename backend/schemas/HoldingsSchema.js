const { Schema } = require("mongoose");

const HoldingsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    name: String,

    qty: {
      type: Number,
      default: 0,
    },

    avg: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      default: 0,
    },

    net: {
      type: String,
      default: "0.00",
    },

    day: {
      type: String,
      default: "0.00",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { HoldingsSchema };