const app = require("./app");
const chalk = require("chalk");
const PORT = require("./config/config").app.port;

app.listen(PORT, () => {
  console.log(
    chalk.black.bgBlue(`server is  running at http://localhost:${PORT}`)
  );
});
