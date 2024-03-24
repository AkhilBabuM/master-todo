import ErrorResponse from "./errorResponse.js";

export const errorHandler = (err, req, res, next) => {
  let error, error_stack;
  if (process.env.NODE_ENV === "development") {
    error_stack = err.stack;
    error = err;
  }
  // console.log("\n\nError Status Code:",err.status, "\n\nError Console Log:",err);
  if (err instanceof ErrorResponse) {
    return res.status(err.status).json({
      message: "ERROR: " + err.message,
      error_stack,
    });
  }
  return res.status(500).json({
    message: "Internal Server Error",
    error,
  });
};
