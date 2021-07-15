var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function UnavailableForLegalReasons() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, UnavailableForLegalReasons);
}
UnavailableForLegalReasons.prototype = Object.create(BaseError.prototype);
UnavailableForLegalReasons.prototype.constructor = UnavailableForLegalReasons;
UnavailableForLegalReasons.prototype.code = 451;

module.exports = UnavailableForLegalReasons;
