var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function URITooLong() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, URITooLong);
}
URITooLong.prototype = Object.create(BaseError.prototype);
URITooLong.prototype.constructor = URITooLong;
URITooLong.prototype.code = 414;

module.exports = URITooLong;
