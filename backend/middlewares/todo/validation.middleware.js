import ErrorResponse from "../../error/errorResponse.js";

// Checking if "title, description, completed" are passed in request body
export const checkInputs = (req, res, next) => {
  if (!req.body?.title) {
    throw ErrorResponse.badRequest("Please add a title field");
  }
  if (!req.body?.description) {
    throw ErrorResponse.badRequest("Please add a description field");
  }
  if (!req.body?.completed) {
    throw ErrorResponse.badRequest("Please add a completed field");
  }
  next();
};
