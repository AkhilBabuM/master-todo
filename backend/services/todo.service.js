import ErrorResponse from "../error/errorResponse.js";
import Todo from "../models/todo.model.js";

const checkIfTodoExists = async (id) => {
  const todo = await Todo.findById(id);
  if (!todo) {
    throw ErrorResponse.badRequest(`Todo with id ${id} does not exist`);
  }
};

export const createTodoService = async (title, description, completed) => {
  const todo = await Todo.create({
    title: title,
    description: description,
    completed: completed,
  });
  return todo;
};

export const getTodoService = async () => {
  const todo = await Todo.find();
  return todo;
};

export const updateTodoService = async (id, body) => {
  await checkIfTodoExists(id);
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedTodo;
};

export const deleteTodoService = async (id) => {
  await checkIfTodoExists(id);
  await Todo.findByIdAndDelete(id);
};
