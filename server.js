const app = require("./app");
const logger = require("./logger");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`server is running on port :${PORT}`);
  });
  