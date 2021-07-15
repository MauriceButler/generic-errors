var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function NotFound() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, NotFound);
}
NotFound.prototype = Object.create(BaseError.prototype);
NotFound.prototype.constructor = NotFound;
NotFound.prototype.code = 404;

module.exports = NotFound;
