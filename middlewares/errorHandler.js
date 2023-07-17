const { logEvents } = require('./logEvents');
const { error_notification } = require("api-http-response")

const errorHandler = async (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, 'errLog.txt');
    console.error(err.stack);
    await error_notification(`${err.name}: ${err.message}`);
    res.status(500).send(err.message);
}

module.exports = errorHandler;