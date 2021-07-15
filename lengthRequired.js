var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function LengthRequired() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, LengthRequired);
}
LengthRequired.prototype = Object.create(BaseError.prototype);
LengthRequired.prototype.constructor = LengthRequired;
LengthRequired.prototype.code = 411;

module.exports = LengthRequired;
