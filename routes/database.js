const express = require('express');
const app = express();
const database = express.Router();

const dbconnection = require('../database/dbconnection');
dbconnection.testDBConnection();


database.get('/query/sample', function (req, res, next) {
    try{
        dbconnection.executeSampleQuery();
    }catch(err){
        console.log(err);
    }
    res.send("/db/query/sample");
});

module.exports = database;
