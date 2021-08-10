const { Schema, model } = require("mongoose");

const propertySchema = new Schema({
  property_address: {
    type: String,
    required: true,
  },
  property_suburb: {
    type: String,
    required: true,
  },
  property_state: {
    type: String,
    required: true,
  },
  property_postcode: {
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
  // user_id: {
  //     id: {
  //         type: Schema.Types.ObjectId,
  //         ref: "User"
  //     }
  // },
  invoice_id: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "Invoice",
    },
  },
//   fund_id: {
//     id: {
//       type: Schema.Types.ObjectId,
//       ref: "Fund",
//     },
//   },
  campaign_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
    },
  ],
});

module.exports = model("Property", propertySchema);
