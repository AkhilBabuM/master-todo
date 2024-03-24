import ErrorResponse from "../error/errorResponse.js";
import Todo from "../models/todo.model.js";

const checkIfTodoExists = async (user, id) => {
  const todo = await Todo.findOne({ user: user.id, _id: id });
  if (!todo) {
    throw ErrorResponse.badRequest(
      `Todo with id ${id} does not exist under user:${user.name}`
    );
  }
};

export const createTodoService = async (
  title,
  description,
  completed,
  user
) => {
  const todo = await Todo.create({
    title,
    description,
    completed,
    user: user.id,
  });
  return todo;
};

export const getTodoService = async (user) => {
  const todo = await Todo.find({ user: user._id });
  return todo;
};

export const updateTodoService = async (user, id, body) => {
  await checkIfTodoExists(user, id);
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedTodo;
};

export const deleteTodoService = async (user, id) => {
  await checkIfTodoExists(user, id);
  await Todo.findByIdAndDelete(id);
};
