const UserModel = require("../models/users.model");

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

module.exports = { registerUser, loginUser };
