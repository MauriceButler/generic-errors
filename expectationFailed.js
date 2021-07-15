var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function ExpectationFailed() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, ExpectationFailed);
}
ExpectationFailed.prototype = Object.create(BaseError.prototype);
ExpectationFailed.prototype.constructor = ExpectationFailed;
ExpectationFailed.prototype.code = 417;

module.exports = ExpectationFailed;
