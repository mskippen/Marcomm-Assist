const mongoose = require("mongoose");

// const connection = () =>
  mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/marcomm_app", {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })

module.exports = mongoose.connection;
