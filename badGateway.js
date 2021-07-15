var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function BadGateway() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, BadGateway);
}
BadGateway.prototype = Object.create(BaseError.prototype);
BadGateway.prototype.constructor = BadGateway;
BadGateway.prototype.code = 502;

module.exports = BadGateway;
