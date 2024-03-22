const express = require("express");
const dotenv = require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");
const {errorHandler} = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 5000;

app.use("/api/goals", todoRoutes);
app.use(express.json());
app.use(express.urlencoded({encoded: false}))

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
