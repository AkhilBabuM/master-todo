import express from "express";

// imports controllers
import { getTodo } from "../controllers/todo/getTodo.controller.js";
import { createTodo } from "../controllers/todo/createTodo.controller.js";
import { updateTodo } from "../controllers/todo/updateTodo.controller.js";
import { deleteTodo } from "../controllers/todo/deleteTodo.controller.js";

// imports validation middleware
import { checkInputs } from "../middlewares/todo/validation.middleware.js";

// imports Authentication Middleware
import { ensureAuthorized } from "../middlewares/auth.middleware.js";

const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(ensureAuthorized, getTodo)
  .post(ensureAuthorized, checkInputs, createTodo);

todoRouter
  .route("/:id")
  .put(ensureAuthorized, checkInputs, updateTodo)
  .delete(ensureAuthorized, deleteTodo);

export default todoRouter;
