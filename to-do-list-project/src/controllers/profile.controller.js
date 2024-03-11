const UserModel = require("../models/users.model");

const getProfile = async (req, res) => {
  try {
    const email = req.headers["email"];
    console.log(email);
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

module.exports = getProfile;
