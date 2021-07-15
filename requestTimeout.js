var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function RequestTimeout() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, RequestTimeout);
}
RequestTimeout.prototype = Object.create(BaseError.prototype);
RequestTimeout.prototype.constructor = RequestTimeout;
RequestTimeout.prototype.code = 408;

module.exports = RequestTimeout;
