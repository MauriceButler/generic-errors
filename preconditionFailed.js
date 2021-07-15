var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function PreconditionFailed() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, PreconditionFailed);
}
PreconditionFailed.prototype = Object.create(BaseError.prototype);
PreconditionFailed.prototype.constructor = PreconditionFailed;
PreconditionFailed.prototype.code = 412;

module.exports = PreconditionFailed;
