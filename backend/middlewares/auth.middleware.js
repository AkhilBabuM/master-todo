import jwt from "jsonwebtoken";
import ErrorResponse from "../error/errorResponse.js";
import User from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";

export const ensureAuthorized = expressAsyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      console.log("Token:", token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
    } else {
      throw ErrorResponse.unauthorized("You are not authorized");
    }
    next(token);
  } catch (error) {
    next(error);
  }
});
