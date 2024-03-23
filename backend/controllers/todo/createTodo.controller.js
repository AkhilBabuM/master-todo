import Todo from "../../models/todo.model.js";
import asyncHandler from "express-async-handler";

// @route POST /api/v1/todo
export const createTodo = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body?.title) {
    res.status(400);
    throw new Error("Please add a title field");
  }
  if (!req.body?.description) {
    res.status(400);
    throw new Error("Please add a description field");
  }

  const todo = await Todo.create({
    title: req.body.title,
    description:req.body.description,
    completed:req.body.completed,
  })
  
  res
    .status(200)
    .json({
      message: `Hello from createTodo`,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      todo: todo,
    });
});
