const UserModel = require("../models/users.model");

const getProfile = async (req, res) => {
  try {
    const email = req.headers["email"];
    const user = await UserModel.findOne({ email });
    return res.status(200).json({
      success: true,
      message: "User Profile",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const updateProfile = async (req, res) => {
  try {
    const email = req.headers["email"];
    const { username, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(500).json({
        success: false,
        message: "User not found.",
      });
    }
    user.username = username ?? user.username;
    user.password = password ?? user.password;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Update Profile",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { getProfile, updateProfile };
