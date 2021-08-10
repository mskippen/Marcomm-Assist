const { Schema, model } = require("mongoose");
const SignBoardForm = require("./formTypes/SignboardForm");
const ImForm = require("./formTypes/ImForm");

const itemSchema = new Schema({
  item_type: {
    type: String,
  },
  date_entered: {
      type: Date
  },
  first_draft_due: {
    type: Date,
    required: true,
  },
  final_draft_due: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  rate: {
    type: Number,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completed_date: {
    type: Date,
  },
  signboard_form: SignBoardForm,
  im_form: ImForm,
});

module.exports = model("Item", itemSchema);
