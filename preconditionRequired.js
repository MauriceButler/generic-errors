var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function PreconditionRequired() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, PreconditionRequired);
}
PreconditionRequired.prototype = Object.create(BaseError.prototype);
PreconditionRequired.prototype.constructor = PreconditionRequired;
PreconditionRequired.prototype.code = 428;

module.exports = PreconditionRequired;
