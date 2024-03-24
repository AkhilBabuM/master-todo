import expressAsyncHandler from "express-async-handler";
import { loginService } from "../../services/user.service.js";

// @route POST api/v1/user/login
export const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const [user, token] = await loginService(email, password);
  res
    .status(201)
    .json({ message: "Login Successful", id: user.id, data: user, token });
});