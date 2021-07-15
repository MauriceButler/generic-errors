var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function NotImplemented() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, NotImplemented);
}
NotImplemented.prototype = Object.create(BaseError.prototype);
NotImplemented.prototype.constructor = NotImplemented;
NotImplemented.prototype.code = 501;

module.exports = NotImplemented;
