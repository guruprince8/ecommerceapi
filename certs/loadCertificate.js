const fs = require('fs')
let key = fs.readFileSync('certs/tomcat.key');
let cert = fs.readFileSync('certs/tomcat.crt');
let options = {
    key: key,
    cert: cert
}
module.exports = {options};