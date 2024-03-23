import Todo from "../../models/todo.model.js";
import asyncHandler from "express-async-handler";
import { getTodoService } from "../../services/todo.service.js";

// @route GET /api/v1/todo
export const getTodo = asyncHandler(async (req, res) => {
  const todos = await getTodoService(Todo)
  res.status(200).json({ message: "Hello from getTodo", todos: todos });
});
