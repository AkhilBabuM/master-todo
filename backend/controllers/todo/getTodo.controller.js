import asyncHandler from "express-async-handler";
import { getTodoService } from "../../services/todo.service.js";

// @route GET /api/v1/todo
export const getTodo = asyncHandler(async (req, res) => {
  const user = req.user;
  console.log(user)
  const todos = await getTodoService(user)
  res.status(200).json({ message: "Hello from getTodo", data: todos });
});
