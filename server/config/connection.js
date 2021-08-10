const mongoose = require("mongoose");

// const connection = () =>
  mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/marcomm_app", {
      useNewUrlParser: true,
      useFindAndModify: true,
    }).catch(err => console.log(err))

module.exports = mongoose.connection;
