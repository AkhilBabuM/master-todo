import asyncHandler from "express-async-handler";
import { createTodoService } from "../../services/todo.service.js";

// @route POST /api/v1/todo
// @access Private
export const createTodo = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;

  const todo = await createTodoService(title, description, completed);

  res.status(200).json({
    message: `Todo Created`,
    id: todo.id,
    data: todo,
  });
});
