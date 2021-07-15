var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function Unauthorised() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, Unauthorised);
}
Unauthorised.prototype = Object.create(BaseError.prototype);
Unauthorised.prototype.constructor = Unauthorised;
Unauthorised.prototype.code = 401;

module.exports = Unauthorised;
