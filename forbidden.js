var BaseError = require('./baseError');
var captureStackTrace = require('capture-stack-trace');

function Forbidden(){
    BaseError.apply(this, arguments);
    captureStackTrace(this, Forbidden);
}
Forbidden.prototype = Object.create(BaseError.prototype);
Forbidden.prototype.constructor = Forbidden;
Forbidden.prototype.code = 403;

module.exports = Forbidden;