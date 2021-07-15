var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function GatewayTimeout() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, GatewayTimeout);
}
GatewayTimeout.prototype = Object.create(BaseError.prototype);
GatewayTimeout.prototype.constructor = GatewayTimeout;
GatewayTimeout.prototype.code = 504;

module.exports = GatewayTimeout;
