const express = require('express');

const authenticateRouter = express.Router();

authenticateRouter.get('/', function (req, res, next) {
    //logger.info("request received for /authenticate");
    res.send("authenticate");
    //logger.info("response sent for /authenticate");
});
module.exports = authenticateRouter;