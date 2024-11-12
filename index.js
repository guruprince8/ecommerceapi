const express = require("express");
const https = require('https')
const fs = require('fs')
const app = express();
var log4js = require("log4js");
require('dotenv').config();
const appconfig = require('./config');
const certOptions = require("./certs/loadCertificate");


// application routes
const defaultRouter = require('./routes/default');
const authenticateRouter = require('./routes/authenticate');
const databaseRouter = require('./routes/database');
app.use("/authenticate",authenticateRouter);
app.use("/db",databaseRouter);
app.use("/",defaultRouter);

var server = https.createServer(certOptions.options, app)
server.listen(process.env.PORT, () => {
    console.log("server starting on port : " + process.env.PORT)
});