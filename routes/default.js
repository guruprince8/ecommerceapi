const express = require('express');

const defaultRouter = express.Router();

defaultRouter.get('/', function (req, res, next) {
    //logger.info("request received for /authenticate");
    res.send("default");
    //logger.info("response sent for /authenticate");
});
module.exports = defaultRouter;