const getTodo = (req, res) => {
  res.status(200).json({ message: "Hello from getTodo" });
};

const createTodo = async (req, res) => {
  console.log(req.body);
  if (!req.body?.text) {
    res.status(400);
    throw new Error("Please Add a text field");
  }
  res.status(200).json({ message: `Hello from createTodo ${req.body.text}` });
};

const updateTodo = (req, res) => {
  res
    .status(200)
    .json({ message: `Hello from updateTodo with ID ${req.params.id}` });
};

const deleteTodo = (req, res) => {
  res
    .status(200)
    .json({ message: `Hello from deleteTodo with ID ${req.params.id}` });
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
