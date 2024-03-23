import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
import todoRouter from "./routes/todo.route.js";
import { errorHandler } from "./error/errorHandler.js";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/todo", todoRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
