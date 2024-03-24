import express from "express";
const userRouter = express.Router();

import { login } from "../controllers/user/login.controller.js";
import { signup } from "../controllers/user/signup.controller.js";
import { me } from "../controllers/user/me.controller.js";
import { ensureAuthorized } from "../middlewares/auth.middleware.js";

userRouter.route('/login').post(login);
userRouter.route('/signup').post(signup);
userRouter.route('/me').get(ensureAuthorized,me);

export default userRouter;