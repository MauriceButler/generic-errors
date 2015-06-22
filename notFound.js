var BaseError = require('./baseError');

function NotFoundError(){
    BaseError.apply(this, arguments);
    Error.captureStackTrace(this, NotFoundError);
}
NotFoundError.prototype = Object.create(BaseError.prototype);
NotFoundError.prototype.constructor = NotFoundError;
NotFoundError.prototype.code = 404;

module.exports = NotFoundError;