var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function Conflict() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, Conflict);
}
Conflict.prototype = Object.create(BaseError.prototype);
Conflict.prototype.constructor = Conflict;
Conflict.prototype.code = 409;

module.exports = Conflict;
