
const express = require("express");
const https = require('https')
const fs = require('fs')
const app = express();

let key = fs.readFileSync('certs/tomcat.key');
let cert = fs.readFileSync('certs/tomcat.crt');
const port = 3000;

let options = {
    key:key,
    cert:cert
}

app.get("/",(req,res)=> {
    res.send("hello world");
});

app.get("/authenticate",(req,res)=> {
    res.send("authenticate");
});

var server = https.createServer(options,app)
server.listen(port, () => {
    console.log("server starting on port : " + port)
  });