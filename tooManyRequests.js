var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function TooManyRequests() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, TooManyRequests);
}
TooManyRequests.prototype = Object.create(BaseError.prototype);
TooManyRequests.prototype.constructor = TooManyRequests;
TooManyRequests.prototype.code = 429;

module.exports = TooManyRequests;
