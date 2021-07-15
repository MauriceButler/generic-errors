var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function NetworkAuthenticationRequired() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, NetworkAuthenticationRequired);
}
NetworkAuthenticationRequired.prototype = Object.create(BaseError.prototype);
NetworkAuthenticationRequired.prototype.constructor = NetworkAuthenticationRequired;
NetworkAuthenticationRequired.prototype.code = 511;

module.exports = NetworkAuthenticationRequired;
