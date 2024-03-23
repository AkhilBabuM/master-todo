import ErrorResponse from "./errorResponse.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorResponse) {
    console.log("This the error code", err, err.status);
    return res.status(err.status).json({
      message: "ERROR: " + err.message,
      error_stack: process.env.NODE_ENV === "production" ? err.stack : null,
    });
  }
  return res.status(500).json({ message: "Internal Server Error", error: err });
};
