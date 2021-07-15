var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function PayloadTooLarge() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, PayloadTooLarge);
}
PayloadTooLarge.prototype = Object.create(BaseError.prototype);
PayloadTooLarge.prototype.constructor = PayloadTooLarge;
PayloadTooLarge.prototype.code = 413;

module.exports = PayloadTooLarge;
