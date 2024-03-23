import ErrorResponse from "../error/errorResponse.js";

const checkIfTodoExists = async (Todo, id)=>{
  const todo = await Todo.findById(id);
  if (!todo) {
    throw ErrorResponse.badRequest(`Todo with id ${id} does not exist`);
  }
}

export const createTodoService = async (
  Todo,
  title,
  description,
  completed
) => {
  const todo = await Todo.create({
    title: title,
    description: description,
    completed: completed,
  });
  return todo;
};

export const getTodoService = async (Todo) => {
  const todo = await Todo.find();
  return todo;
};

export const updateTodoService = async (Todo, id, body) => {
  await checkIfTodoExists(Todo, id);
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedTodo;
};

export const deleteTodoService = async (Todo, id) => {
  await checkIfTodoExists(Todo, id);
  await Todo.findByIdAndDelete(id);
};
