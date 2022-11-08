const mongoose = require("mongoose");

const db = () => {
  console.log(process.env.MONGO_URI);
  mongoose
    .connect('mongodb+srv://om-javir-0704:omjavir@cluster0.mspcams.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Database connected on server: ${data.connection.host}`);
    });
};

module.exports = db;