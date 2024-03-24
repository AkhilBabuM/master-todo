import asyncHandler from "express-async-handler";
import { updateTodoService } from "../../services/todo.service.js";

// @route PUT /api/v1/todo/:id
export const updateTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = req.user;
  const updatedTodo = await updateTodoService(user, id, body);

  res
    .status(200)
    .json({ message: "Hello from updateTodo", id: id, data: updatedTodo });
});
