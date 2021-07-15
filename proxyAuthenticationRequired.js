var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function ProxyAuthenticationRequired() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, ProxyAuthenticationRequired);
}
ProxyAuthenticationRequired.prototype = Object.create(BaseError.prototype);
ProxyAuthenticationRequired.prototype.constructor = ProxyAuthenticationRequired;
ProxyAuthenticationRequired.prototype.code = 407;

module.exports = ProxyAuthenticationRequired;
