import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Please add the title"] },
    description: { type: String, required: [true, "Please add the description"] },
    completed: {type:Boolean, required: [true, "Please add the completed field"]}
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
