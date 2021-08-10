const { Schema, model } = require("mongoose");

// const formSchema = new Schema(
module.exports = {
  sign_size: [
    {
      type: String,
      // required: true,
    },
  ],
  quantity: {
    type: Number,
    // required: true,
  },
  five_key_points: [
    {
      type: String,
      // required: true,
    },
  ],
  agency: [
    {
      agency_name: String,
      agency_logo: String,
      agency_rla: String,
      agent_name: String,
      agent_number: Number,
    },
  ],
};
// );

// module.exports = model("SignBoardForm", formSchema);
