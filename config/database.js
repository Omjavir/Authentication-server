const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Database connected on server: ${data.connection.host}`);
    });
};

module.exports = db;