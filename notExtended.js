var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function NotExtended() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, NotExtended);
}
NotExtended.prototype = Object.create(BaseError.prototype);
NotExtended.prototype.constructor = NotExtended;
NotExtended.prototype.code = 510;

module.exports = NotExtended;
