var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function Gone() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, Gone);
}
Gone.prototype = Object.create(BaseError.prototype);
Gone.prototype.constructor = Gone;
Gone.prototype.code = 410;

module.exports = Gone;
