const mongoose = require("mongoose");

const connection = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database connected"));

module.exports = connection;
