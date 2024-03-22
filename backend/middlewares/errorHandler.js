const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: "There is an error",
    error_message: err.message,
    error: process.env.NODE_ENV === "production" ? err.stack : null,
  });
};

module.exports = { errorHandler };
