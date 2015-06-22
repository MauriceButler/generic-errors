var BaseError = require('./baseError');

function PreconditionFailedError(){
    BaseError.apply(this, arguments);
    Error.captureStackTrace(this, PreconditionFailedError);
}
PreconditionFailedError.prototype = Object.create(BaseError.prototype);
PreconditionFailedError.prototype.constructor = PreconditionFailedError;
PreconditionFailedError.prototype.code = 412;

module.exports = PreconditionFailedError;