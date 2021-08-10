const mongoose = require("mongoose");

const connection = () =>
  mongoose
    .connect("mongodb://localhost/marcomm_app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database connected"));

module.exports = connection;
