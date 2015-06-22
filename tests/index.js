var test = require('tape'),
    errors = require('../');

function validateError(t, errorConstructor){
    var testMessage = 'TEST ERROR',
        error = new errorConstructor(),
        errorWithMessage = new errorConstructor(testMessage),
        fileName = errorConstructor.name.substring(0, 1).toLowerCase() +
            errorConstructor.name.substring(1) + '.js';

    t.ok(error instanceof Error, 'is instance of Error');
    t.ok(error instanceof errors.BaseError, 'is instance of BaseError');
    t.ok(error instanceof errorConstructor, 'is instance of ' + errorConstructor.name);

    t.ok(errors.BaseError.isGenericError(error), 'is a GenericError');
    t.ok(errors.BaseError.isGenericError(JSON.parse(JSON.stringify(error))), 'is a GenericError after serialization');

    t.ok(error.stack, 'has a stack');
    t.notOk(~error.stack.indexOf(fileName), 'stack trace should be trimmed');
    t.equal(error.message, errorConstructor.name, 'message defaulted correctly');
    t.equal(error.toString(), errorConstructor.name, 'toString is set correctly');
    t.equal(error.valueOf(), error, 'valuof returns the instance');

    t.ok(error.code, 'has a code: ' + error.code);
    t.equal(error.code, errorConstructor.prototype.code, 'has correct code');

    t.equal(errorWithMessage.message, testMessage, 'message set correctly');
    t.equal(errorWithMessage.toString(), testMessage, 'toString correctly returns message');
}

test('base', function(t){
    var keys = Object.keys(errors);

    t.plan(keys.length * 14);

    for(var key in errors){
        validateError(t, errors[key]);
    }
});
