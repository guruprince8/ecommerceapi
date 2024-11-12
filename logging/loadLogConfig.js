const log4js = require("log4js");

const log4jsOptions = {
    'appenders': {
        'file':{
            'type':'file',
            'filename':'application.log'
        }
    },
    'categories':{
        'default':{
            'appenders':["file"],
            'level':'info'
        }
    }
};

log4js.configure(log4jsOptions);
const logger = log4js.getLogger("file");

module.exports ={logger};