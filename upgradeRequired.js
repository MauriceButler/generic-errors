var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function UpgradeRequired() {
    BaseError.apply(this, arguments);
    captureStackTrace(this, UpgradeRequired);
}
UpgradeRequired.prototype = Object.create(BaseError.prototype);
UpgradeRequired.prototype.constructor = UpgradeRequired;
UpgradeRequired.prototype.code = 426;

module.exports = UpgradeRequired;
