var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function VariantAlsoNegotiates() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, VariantAlsoNegotiates);
}
VariantAlsoNegotiates.prototype = Object.create(BaseError.prototype);
VariantAlsoNegotiates.prototype.constructor = VariantAlsoNegotiates;
VariantAlsoNegotiates.prototype.code = 506;

module.exports = VariantAlsoNegotiates;
