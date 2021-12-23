const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught  Exceptions
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server due to uncaught xception");

  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// connect to database
connectDatabase();

port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

// unHandled Promise Rejection

process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
