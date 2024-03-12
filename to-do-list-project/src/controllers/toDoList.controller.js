const ToDoModel = require("../models/todoList.model");

const createToDo = async (req, res) => {
  try {
    const email = req.headers["email"];
    const { title, description } = req.body;
    const toDo = {
      email,
      title,
      description,
    };
    await ToDoModel.create(toDo);
    return res.status(500).json({
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

module.exports = { createToDo };
