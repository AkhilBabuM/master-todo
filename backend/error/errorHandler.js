export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: "Error: " + err.message,
    error: process.env.NODE_ENV === "production" ? err.stack : null,
  });
};