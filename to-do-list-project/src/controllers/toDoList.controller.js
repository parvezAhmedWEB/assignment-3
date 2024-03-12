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
const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.headers["email"];
    const { title, description } = req.body;
    const toDo = await ToDoModel.findOne({ _id: id, email });
    console.log(toDo);
    toDo.title = title ?? toDo.title;
    toDo.description = description ?? toDo.description;
    await toDo.save();
    return res.status(200).json({
      success: true,
      message: "Update To Do",
      data: toDo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.headers["email"];
    const toDo = await ToDoModel.deleteOne({ _id: id, email });
    return res.status(200).json({
      success: true,
      message: "Delete To Do",
      data: toDo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createToDo, getToDo, updateToDo, deleteToDo };
