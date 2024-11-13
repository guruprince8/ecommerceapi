const express = require("express");
const https = require('https')
const app = express();
require('dotenv').config();

// load crt and key
const certOptions = require("./certs/loadCertificate");

// application routes
const defaultRouter = require('./routes/default');
const authenticateRouter = require('./routes/authenticate/authenticate');
const databaseRouter = require('./routes/database/database');
const currencyExchangeRouter = require('./routes/currency/currencyexchange');
app.use("/authenticate", authenticateRouter);
app.use("/db", databaseRouter);
app.use("/currency", currencyExchangeRouter);
app.use("/", defaultRouter);

// start https server on PORT mentioned in .env file
var server = https.createServer(certOptions.options, app)
server.listen(process.env.PORT, () => {
    console.log("server starting on port : " + process.env.PORT)
});