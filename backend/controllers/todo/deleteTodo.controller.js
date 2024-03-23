import Todo from "../../models/todo.model.js";
import asyncHandler from "express-async-handler";

// @route DELETE /api/v1/todo/:id
export const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error(`Todo with id ${req.params.id} does not exist`);
  }
  await Todo.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json({ message: `${req.params.id} deleted`, id: req.params.id });
});
