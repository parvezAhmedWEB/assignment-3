const jwt = require("jsonwebtoken");
const key = require("../../config/config").token.key;

const authenticate = (req, res, next) => {
  try {
    const token = req.headers["token"];
    console.log(token);
    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      } else {
        const email = decoded["user"].email;
        console.log(email);
        req.headers.email = email;

        next();
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid Token",
      error: error.message,
    });
  }
};

module.exports = authenticate;
