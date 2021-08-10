const { Schema, model } = require("mongoose");

const FundSchema = new Schema({
  fund_name: {
    type: String,
    required: true,
  },
  abn: {
    type: String,
    required: true,
  },
  entity: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  campaigns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
    },
  ],
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
  invoice: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "Invoice",
    },
  },
});

module.exports = model("Fund", FundSchema);
