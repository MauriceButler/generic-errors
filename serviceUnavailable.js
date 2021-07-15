var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function ServiceUnavailable() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, ServiceUnavailable);
}
ServiceUnavailable.prototype = Object.create(BaseError.prototype);
ServiceUnavailable.prototype.constructor = ServiceUnavailable;
ServiceUnavailable.prototype.code = 503;

module.exports = ServiceUnavailable;
