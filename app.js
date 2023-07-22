const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const routes = require("./routes");
const logger = require("./logger");
const port = 3000;

app.use(express.json());

//route
app.get("/", (req, res) => {
  res.status(200).send(`You are wring the api for test cases`);
});

app.use("/api", routes);

// start application
module.exports = app;

// app.listen(port, () => {
//   logger.info(`server is running on port :${port}`);
// });
