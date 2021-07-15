var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function HTTPVersionNotSupported() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, HTTPVersionNotSupported);
}
HTTPVersionNotSupported.prototype = Object.create(BaseError.prototype);
HTTPVersionNotSupported.prototype.constructor = HTTPVersionNotSupported;
HTTPVersionNotSupported.prototype.code = 505;

module.exports = HTTPVersionNotSupported;
