function BaseError(){
    var oldLimit = Error.stackTraceLimit,
        error;

    Error.stackTraceLimit = 20;

    error = Error.apply(this, arguments);

    Error.stackTraceLimit = oldLimit;

    Error.captureStackTrace(this, BaseError);

    this.__genericError = true;
    this.message = error.message || this.toString();
}
BaseError.prototype = Object.create(Error.prototype);
BaseError.prototype.constructor = BaseError;
BaseError.prototype.toString = function(){
    return this.message || this.constructor.name;
};
BaseError.prototype.valueOf = function(){
    return this;
};

BaseError.isGenericError = function(obj){
    return obj instanceof BaseError || (obj != null && obj.__genericError);
};
BaseError.prototype.code = 500;

module.exports = BaseError;