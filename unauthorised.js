var BaseError = require('./baseError');

function UnauthorisedError(){
    BaseError.apply(this, arguments);
    Error.captureStackTrace(this, UnauthorisedError);
}
UnauthorisedError.prototype = Object.create(BaseError.prototype);
UnauthorisedError.prototype.constructor = UnauthorisedError;
UnauthorisedError.prototype.code = 401;

module.exports = UnauthorisedError;