const {
  createToDo,
  getToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/toDoList.controller");

const router = require("express").Router();

router.delete("/:id", deleteToDo);
router.patch("/:id", updateToDo);
router.get("/", getToDo);
router.post("/", createToDo);

module.exports = router;
