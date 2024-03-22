const getTodo = (req, res) => {
  res.status(400)
  throw new error('Please Add a text field');
  res.status(200).json({ message: "Hello from getTodo" });
};

const createTodo = (req, res) => {
  res.status(200).json({ message: `Hello from createTodo` });
}

const updateTodo = (req, res) => {
  res.status(200).json({ message: `Hello from updateTodo with ID ${req.params.id}` });
}

const deleteTodo = (req, res) => {
  res.status(200).json({ message: `Hello from deleteTodo with ID ${req.params.id}` });
}

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
}