const express = require('express');
const currencyExchangeRouter = express.Router();
const currency = require('./currency');
const error = require('../error/error');
const logger = require('../../logging/loadLogConfig');

currencyExchangeRouter.get('/list', function (req, res, next) {
    logger.logger.info('request received for '+req.url+' ip address '+req.ip);
    let listResponse = {
        "currencies": currency.allCurrencies,
    }
    res.statusCode = 200;
    logger.logger.info('response sent for '+req.url);

    res.json(listResponse);
});

/**
 
 * Coverts from source currency to destination currency.
 
 * @param {string} - Source Currency.
 
 * @param {string} - Destination Currency.

 * @param {number} - Source Amount.
 
 * @returns {number} - Coverted amount value from source to destination
 
 * @example
 
* https://127.0.0.1:3000/currency/convert?sourceCurrency=USD&destinationCurrency=JPN&sourceAmount=0.2
 
 */
currencyExchangeRouter.get('/convert', function (req, res, next) {
    logger.logger.info('request received for '+req.url+' ip address '+req.ip);
    let sourceCurrency = req.query.sourceCurrency;
    let destinationCurrency = req.query.destinationCurrency;
    if (currency.allCurrencies.includes(sourceCurrency) && currency.allCurrencies.includes(destinationCurrency)) {
        let todayRate = 84.40;
        let sourceAmount = req.query.sourceAmount;
        console.log('sourceCurrency=%s destinationCurrency=%s', sourceCurrency, destinationCurrency);
        logger.logger.info('response sent for '+req.url);
        res.json({ 'destinationAmount': (sourceAmount * todayRate) })
    } else{
        logger.logger.info('response sent for '+req.url);
        res.statusCode=400;
        res.json({'error':error.errorMessages["InvalidCurrency"]});
    }
});
module.exports = currencyExchangeRouter;