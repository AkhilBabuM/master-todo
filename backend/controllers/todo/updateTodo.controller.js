import Todo from "../../models/todo.model.js";
import asyncHandler from "express-async-handler";
import { updateTodoService } from "../../services/todo.service.js";

// @route PUT /api/v1/todo/:id
export const updateTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const todo = await Todo.findById(id);

  const updatedTodo = await updateTodoService(Todo, id, body)

  res.status(200).json({ message: "Hello from updateTodo", todo: updatedTodo });
});
