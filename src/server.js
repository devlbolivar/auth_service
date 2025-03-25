require("dotenv").config();
const { port } = require("./config");
const connectDB = require("./config/db");
const app = require("./app");

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server auth is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
