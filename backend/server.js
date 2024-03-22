const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");
const {errorHandler} = require("./middlewares/errorHandler");
const connectDB = require('./config/db')
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/api/todo", todoRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
