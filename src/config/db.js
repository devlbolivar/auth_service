const mongoose = require("mongoose");
const { dbURI } = require("./index");

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
