const { registerUser, loginUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/registration", registerUser);
router.post("/login", loginUser);

module.exports = router;
