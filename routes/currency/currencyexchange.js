const express = require('express');
const currencyExchangeRouter = express.Router();
const currency = require('./currency');
const error = require('../error/error');

currencyExchangeRouter.get('/list', function (req, res, next) {
    res.send("authenticate");
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
    let sourceCurrency = req.query.sourceCurrency;
    let destinationCurrency = req.query.destinationCurrency;
    if (currency.allCurrencies.includes(sourceCurrency) && currency.allCurrencies.includes(destinationCurrency)) {
        let todayRate = 84.40;
        let sourceAmount = req.query.sourceAmount;
        console.log('sourceCurrency=%s destinationCurrency=%s', sourceCurrency, destinationCurrency);
        res.json({ 'destinationAmount': (sourceAmount * todayRate) })
    } else{
        res.statusCode=400;
        res.json({'error':error.errorMessages["InvalidCurrency"]});
    }
});
module.exports = currencyExchangeRouter;