var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function RangeNotSatisfiable() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, RangeNotSatisfiable);
}
RangeNotSatisfiable.prototype = Object.create(BaseError.prototype);
RangeNotSatisfiable.prototype.constructor = RangeNotSatisfiable;
RangeNotSatisfiable.prototype.code = 416;

module.exports = RangeNotSatisfiable;
