var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function RequestHeaderFieldsTooLarge() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, RequestHeaderFieldsTooLarge);
}
RequestHeaderFieldsTooLarge.prototype = Object.create(BaseError.prototype);
RequestHeaderFieldsTooLarge.prototype.constructor = RequestHeaderFieldsTooLarge;
RequestHeaderFieldsTooLarge.prototype.code = 431;

module.exports = RequestHeaderFieldsTooLarge;
