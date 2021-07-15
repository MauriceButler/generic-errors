var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function BadRequest() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, BadRequest);
}
BadRequest.prototype = Object.create(BaseError.prototype);
BadRequest.prototype.constructor = BadRequest;
BadRequest.prototype.code = 400;

module.exports = BadRequest;
