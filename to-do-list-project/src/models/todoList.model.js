const mongoose = require("mongoose");

const toDoListSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const ToDoModel = mongoose.model("toDoLists", toDoListSchema);

module.exports = ToDoModel;
