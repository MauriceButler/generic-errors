var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function NotAcceptable() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, NotAcceptable);
}
NotAcceptable.prototype = Object.create(BaseError.prototype);
NotAcceptable.prototype.constructor = NotAcceptable;
NotAcceptable.prototype.code = 406;

module.exports = NotAcceptable;
