var test = require('tape'),
    errors = require('../');

function testInflation(t, error){
    var originalString = JSON.stringify(error),
        newString = JSON.stringify(new errors.BaseError(JSON.parse(originalString)));

    t.equal(originalString, newString, 'can be inflated correctly');
}

function validateError(t, errorConstructor){
    var testMessage = 'TEST ERROR',
        testData = {foo: 'bar'},
        testDataWithMessage = {things: 'stuff', message: 'majigger'},
        error = new errorConstructor(),
        errorWithMessage = new errorConstructor(testMessage),
        errorWithData = new errorConstructor(testData),
        errorWithDataAndMessage = new errorConstructor(testDataWithMessage),
        fileName = errorConstructor.name.substring(0, 1).toLowerCase() +
            errorConstructor.name.substring(1) + '.js';

    t.ok(error instanceof Error, 'is instance of Error');
    t.ok(error instanceof errors.BaseError, 'is instance of BaseError');
    t.ok(error instanceof errorConstructor, 'is instance of ' + errorConstructor.name);

    t.ok(errors.BaseError.isGenericError(error), 'is a GenericError');
    t.ok(errors.BaseError.isGenericError(JSON.parse(JSON.stringify(error))), 'is a GenericError after serialization');

    t.ok(error.stack, 'has a stack');
    t.notOk(~error.stack.indexOf(fileName), 'stack trace should be trimmed');
    t.equal(error.message, errorConstructor.prototype.code + ': ' + errorConstructor.name, 'message defaulted correctly');
    t.equal(error.toString(), errorConstructor.prototype.code + ': ' + errorConstructor.name, 'toString is set correctly');
    t.equal(error.valueOf(), error, 'valueOf returns the instance');
    t.ok(error.code, 'has a code: ' + error.code);
    t.equal(error.code, errorConstructor.prototype.code, 'has correct code');
    t.equal(
        JSON.stringify(error),
        '{"__genericError":true,"message":"' +
            error.toString() +
            '","code":' +
            errorConstructor.prototype.code + '}',
        'stringifys correctly');

    testInflation(t, error);

    t.equal(errorWithMessage.message, testMessage, 'message set correctly');
    t.equal(errorWithMessage.toString(), testMessage, 'toString correctly returns message');
    t.equal(
        JSON.stringify(errorWithMessage),
        '{"__genericError":true,"message":"' +
            testMessage +
            '","code":' +
            errorConstructor.prototype.code + '}',
            'stringifys correctly',
        'stringifys correctly');

    testInflation(t, errorWithMessage);

    t.equal(errorWithData.message, error.toString(), 'message set correctly with data');
    t.equal(errorWithData.toString(), errorConstructor.prototype.code + ': ' + errorConstructor.name, 'toString correctly returns message with data');
    t.equal(
        JSON.stringify(errorWithData),
        '{"__genericError":true,"foo":"bar","message":"' +
            error.toString() +
            '","code":' +
            errorConstructor.prototype.code + '}',
            'stringifys correctly',
        'stringifys correctly with data');

    testInflation(t, errorWithData);

    t.equal(errorWithDataAndMessage.message, testDataWithMessage.message, 'message set correctly with message in data');
    t.equal(errorWithDataAndMessage.toString(), testDataWithMessage.message, 'toString correctly returns message with message in data');
    t.equal(
        JSON.stringify(errorWithDataAndMessage),
        '{"__genericError":true,"things":"stuff","message":"' +
            testDataWithMessage.message +
            '","code":' +
            errorConstructor.prototype.code + '}',
            'stringifys correctly',
        'stringifys correctly with message in data');

    testInflation(t, errorWithDataAndMessage);
}

test('base', function(t){
    var keys = Object.keys(errors);

    t.plan(keys.length * 26);

    for(var key in errors){
        validateError(t, errors[key]);
    }
});

