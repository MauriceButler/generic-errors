var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function MethodNotAllowed() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, MethodNotAllowed);
}
MethodNotAllowed.prototype = Object.create(BaseError.prototype);
MethodNotAllowed.prototype.constructor = MethodNotAllowed;
MethodNotAllowed.prototype.code = 405;

module.exports = MethodNotAllowed;
