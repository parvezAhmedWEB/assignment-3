const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("./src/util/error/error");

// use global middleware
app.use(require("./src/middlewares/global.middleware"));

// routes
app.use(require("./src/routes/index.route"));

// global error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
