const axios = require("axios");
const CircularJSON = require("circular-json");
const logger = require("../../logger");

const CMSSService = function () {};
CMSSService.prototype.findAllCMSS_Request = async function () {
  logger.info("You are in service of CMSS");
  try {
    const data = await axios.get(
      "https://api.neoscan.io/api/main_net/v1/get_all_nodes"
    );
    const responseData = CircularJSON.stringify(data);
    logger.info("Get Service successful");
    return JSON.parse(responseData);
  } catch (err) {
    logger.error(err);
  }
};
CMSSService.prototype.createCMSS_Request = async function (postBody) {
  logger.info("You are in service of CMSS");
  try {
    // const data = await axios.get(
    //   "https://api.neoscan.io/api/main_net/v1/get_all_nodes"
    // );

    // call you axios serivce/

    const data = await postService(postBody);

    // const responseData = CircularJSON.stringify(data);
    return data;
  } catch (err) {
    logger.error(err);
  }
};

const postService = (postData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(postData);
    }, 500);
  });
};

module.exports = new CMSSService();
