const getProfile = require("../controllers/profile.controller");

const router = require("express").Router();

router.get("/profile", getProfile);

module.exports = router;
