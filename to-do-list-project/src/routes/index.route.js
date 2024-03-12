const router = require("express").Router();
const authenticate = require("../middlewares/auth.middleware");

const baseRoute = require("./base.route");
const usersRoute = require("./users.route");
const profileRoute = require("./profile.route");
const toDoListRoute = require("./toDoList.route");

router.use("/", baseRoute);
router.use("/api/v1/users", usersRoute);
router.use("/api/v1/users", authenticate, profileRoute);
router.use("/api/v1/toDo", authenticate, toDoListRoute);

module.exports = router;
