import Todo from "../../models/todo.model.js";
import asyncHandler from "express-async-handler";

// @route PUT /api/v1/todo/:id
export const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error(`Todo with id ${req.params.id} does not exist`);
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: "Hello from updateTodo", todo: updatedTodo });
});
