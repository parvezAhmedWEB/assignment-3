const ToDoModel = require("../models/todoList.model");

const createToDo = async (req, res) => {
  try {
    const email = req.headers["email"];
    const { title, description } = req.body;

    const toDo = {
      title,
      description,
      email,
    };
    await ToDoModel.create(toDo);
    return res.status(201).json({
      success: true,
      message: "Create To Do",
      data: toDo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const getToDo = async (req, res) => {
  try {
    const email = req.headers["email"];
    const toDoLists = await ToDoModel.find({ email });
    return res.status(200).json({
      success: true,
      message: "Get To Do",
      data: toDoLists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createToDo, getToDo };
