const router = require("express").Router();

const baseRoute = require("./base.route");
const usersRoute = require("./users.route");

router.use("/", baseRoute);
router.use("/api/v1/users", usersRoute);

module.exports = router;
