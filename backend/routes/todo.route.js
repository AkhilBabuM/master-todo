import express from "express";

// importing controllers
import { getTodo } from "../controllers/todo/getTodo.controller.js";
import { createTodo } from "../controllers/todo/createTodo.controller.js";
import { updateTodo } from "../controllers/todo/updateTodo.controller.js";
import { deleteTodo } from "../controllers/todo/deleteTodo.controller.js";

// importing validation middleware
import { checkInputs } from "../middlewares/todo/validation.middleware.js";
const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(getTodo)
  .post(checkInputs, createTodo);

todoRouter
  .route("/:id")
  .put(checkInputs, updateTodo)
  .delete(deleteTodo);

export default todoRouter;
