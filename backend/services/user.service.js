import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import ErrorResponse from "../error/errorResponse.js";
import jwt from "jsonwebtoken";

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const signupService = async (name, email, password) => {
  if (!name || !email || !password) {
    throw ErrorResponse.badRequest(
      "Please add name, email and password fields"
    );
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw ErrorResponse.badRequest("User with email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashVal = await bcrypt.hashSync(password, salt);

  const user = await User.create({ name, email, password: hashVal });

  if (!user) throw ErrorResponse.badRequest("Invalid User Data");
  var token = generateToken(user.id, email);
  return [user, token];
};

export const loginService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw ErrorResponse.notFound(`User with email: ${email} does not exist`);
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    throw ErrorResponse.unauthorized(" Invalid Password, Please Try again");
  }
  var token = generateToken(user.id, email);
  console.log("Token: ", token);
  return [user, token];
};

export const meService = async () => {
  // Not used
};
