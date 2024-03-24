import asyncHandler from "express-async-handler";
import { signupService } from "../../services/user.service.js";

// @route POST /api/v1/user/signup
// @access Public
export const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const [user, token] = await signupService(name, email, password);
  res
    .status(200)
    .json({ message: "Signup Successful", id: user.id, data: user, token });
});
