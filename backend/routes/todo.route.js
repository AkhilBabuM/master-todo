import express from "express";
import { getTodo } from "../controllers/todo/getTodo.controller.js";
import { createTodo } from "../controllers/todo/createTodo.controller.js";
import { updateTodo } from "../controllers/todo/updateTodo.controller.js";
import { deleteTodo } from "../controllers/todo/deleteTodo.controller.js";
const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(getTodo)
  .post(createTodo);

todoRouter
  .route("/:id")
  .put(updateTodo)
  .delete(deleteTodo);

export default todoRouter;