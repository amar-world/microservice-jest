const express = require("express");
const logger = require("../../logger");
const cmssService = require("./cmss.service");
const app = express();

app.get("/cmm_request", async (req, res, next) => {
  logger.info("CMM_REQUEST API called for get");
  try {
    var responseData = await cmssService.findAllCMSS_Request();
    res.status(200).json(responseData);
  } catch (err) {
    logger.error(err);
    next(err);
  }
});

app.post("/post_cmms", async (req, res, next) => {
  logger.info("CMM_REQUEST API called for POST");
  try {
    var responseData = await cmssService.createCMSS_Request(req.body);
    console.log("response Post", responseData);
    res.status(201).json(responseData);
  } catch (err) {
    logger.error(err);
    next(err);
  }
});

module.exports = app;
