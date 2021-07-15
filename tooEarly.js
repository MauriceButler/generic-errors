var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function TooEarly() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, TooEarly);
}
TooEarly.prototype = Object.create(BaseError.prototype);
TooEarly.prototype.constructor = TooEarly;
TooEarly.prototype.code = 425;

module.exports = TooEarly;
