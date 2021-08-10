const { Schema, model } = require("mongoose");

const campaignSchema = new Schema(
  {
    date_entered: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completed_date: {
      type: Date,
    },
    campaign_name: {
      type: String,
      required: true,
    },
    campaign_type: {
      type: String,
    },
    campaign_item_types: [
      {
        type: String,
        // required: true,
      },
    ],
    // property_category: {
    //   type: String,
    //   required: true,
    // },
    // property_estate_name: {
    //   type: String,
    //   required: true,
    // },
    // property_address: {
    //   type: String,
    //   required: true,
    // },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    properties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Propertu",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Campaign", campaignSchema);
