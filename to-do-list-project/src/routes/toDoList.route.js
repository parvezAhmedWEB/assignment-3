const { createToDo, getToDo } = require("../controllers/toDoList.controller");

const router = require("express").Router();
/* 
router.patch("/:id", updateToDo);
router.delete("/:id", deleteToDo);
*/
// router.get("/", getToDo);
router.post("/", createToDo);

module.exports = router;
