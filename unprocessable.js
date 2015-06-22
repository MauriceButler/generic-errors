var BaseError = require('./baseError');

function UnprocessableError(){
    BaseError.apply(this, arguments);
    Error.captureStackTrace(this, UnprocessableError);
}
UnprocessableError.prototype = Object.create(BaseError.prototype);
UnprocessableError.prototype.constructor = UnprocessableError;
UnprocessableError.prototype.code = 422;

module.exports = UnprocessableError;