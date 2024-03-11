const UserModel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const key = require("../../config/config").token.key;

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Input filed is not valid",
      });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Already register user.",
      });
    }
    const newUser = req.body;
    await UserModel.create(newUser);
    return res.status(201).json({
      success: true,
      message: "User is created successfully.",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User is not created.",
      error: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Input filed is not valid.",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }
    if (!(user.password === password)) {
      return res.status(400).json({
        success: false,
        message: "Password does not match.",
      });
    }
    const payload = { user };
    const token = jwt.sign(payload, key, { expiresIn: "7d" });
    return res.status(200).json({
      success: true,
      message: "User login successfully.",
      payload,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User is not login.",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };
