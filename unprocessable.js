var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function Unprocessable(){
    BaseError.apply(this, arguments);
    captureStackTrace(this, Unprocessable);
}
Unprocessable.prototype = Object.create(BaseError.prototype);
Unprocessable.prototype.constructor = Unprocessable;
Unprocessable.prototype.code = 422;

module.exports = Unprocessable;