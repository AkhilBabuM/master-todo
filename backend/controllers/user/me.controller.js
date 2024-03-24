import expressAsyncHandler from "express-async-handler";
import { meService } from "../../services/user.service.js";
// @route GET /api/v1/user/me
// @access Private
export const me = expressAsyncHandler(async(req, res) => {
  const user = req.user;
  res.status(200).json({user});
})