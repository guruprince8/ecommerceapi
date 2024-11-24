// https://github.com/scottie1984/swagger-ui-express
const express = require("express");
const https = require('https')
const fs = require("fs");
const app = express();
require('dotenv').config();

// load crt and key
const certOptions = require("./certs/loadCertificate");

// swagger configuration
var swaggerOptions = {
    explorer: true
};
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

// application routes
const defaultRouter = require('./routes/default');
const authenticateRouter = require('./routes/authenticate/authenticate');
const databaseRouter = require('./routes/database/database');
const currencyExchangeRouter = require('./routes/currency/currencyexchange');
app.use("/authenticate", authenticateRouter);
app.use("/db", databaseRouter);
app.use("/currency", currencyExchangeRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,swaggerOptions));
app.use("/", defaultRouter);

// start https server on PORT mentioned in .env file
var server = https.createServer(certOptions.options, app)
server.listen(process.env.PORT, () => {
    console.log("server starting on port : " + process.env.PORT)
});