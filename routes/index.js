const express = require("express");

const cmssRoute = require("../apps/cmss/cmss.controller");

const apiRouter = express();

apiRouter.use("/cmss", cmssRoute);

module.exports = apiRouter;
