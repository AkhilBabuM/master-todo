import asyncHandler from "express-async-handler";
import { deleteTodoService } from "../../services/todo.service.js";

// @route DELETE /api/v1/todo/:id
export const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await deleteTodoService(id)
  
  res
    .status(200)
    .json({ message: `${req.params.id} deleted`, id: req.params.id });
});
