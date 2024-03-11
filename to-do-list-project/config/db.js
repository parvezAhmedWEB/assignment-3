const mongoose = require("mongoose");
const url = require("./config").db.url;
const OPTION = { user: "", pass: "", autoIndex: true };
const chalk = require("chalk");

const connectDB = async () => {
  try {
    await mongoose.connect(url, OPTION);
    console.log(chalk.black.bgGreenBright("MongoDB is connected."));
  } catch (error) {
    console.log(chalk.black.bgRedBright("MongoDB is not connected."));
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
