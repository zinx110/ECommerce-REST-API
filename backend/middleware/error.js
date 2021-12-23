const ErrorHandler = require("../utils/errorHandler");

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;

  error.message = error.message || "Internal Server Error";

  // wrong mongoDB Id Error

  if (error.name === "CastError") {
    const message = `Resourse not found, invalid: ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (error.code === 11000) {
    const message = `Duplicate ${Object.keys(error.keyValue)} Entered`;
    error = new ErrorHandler(message, 400);
  }

  // Wrong JWT  error
  if (error.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid. Try again`;
    error = new ErrorHandler(message, 400);
  }

  // Expired JWT  error
  if (error.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Login again`;
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
