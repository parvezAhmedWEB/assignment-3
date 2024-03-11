const app = require("./app");
const chalk = require("chalk");
const PORT = require("./config/config").app.port;
const connectDB = require("./config/db");

app.listen(PORT, async () => {
  console.log(
    chalk.black.bgBlue(`server is  running at http://localhost:${PORT}`)
  );
  await connectDB();
});
