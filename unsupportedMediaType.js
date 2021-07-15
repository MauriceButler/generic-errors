var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function UnsupportedMediaType() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, UnsupportedMediaType);
}
UnsupportedMediaType.prototype = Object.create(BaseError.prototype);
UnsupportedMediaType.prototype.constructor = UnsupportedMediaType;
UnsupportedMediaType.prototype.code = 415;

module.exports = UnsupportedMediaType;
