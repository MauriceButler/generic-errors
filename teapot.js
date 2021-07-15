var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function Teapot() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, Teapot);
}
Teapot.prototype = Object.create(BaseError.prototype);
Teapot.prototype.constructor = Teapot;
Teapot.prototype.code = 418;

module.exports = Teapot;
