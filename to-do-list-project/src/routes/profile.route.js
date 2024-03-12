const {
  getProfile,
  updateProfile,
} = require("../controllers/profile.controller");

const router = require("express").Router();

router.get("/profile", getProfile);
router.patch("/profile", updateProfile);

module.exports = router;
