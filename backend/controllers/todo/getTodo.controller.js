import Todo from "../../models/todo.model.js";
import asyncHandler from "express-async-handler";

// @route GET /api/v1/todo
export const getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({ message: "Hello from getTodo", todos: todos });
});
