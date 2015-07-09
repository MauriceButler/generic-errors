var test = require('tape'),
    errors = require('../');

function testInflation(t, error, key){
    var originalString = JSON.stringify(error),
        newString = JSON.stringify(new errors.BaseError(JSON.parse(originalString)));

    t.equal(originalString, newString, key + ' can be inflated correctly');
}

function validateError(t, errorConstructor, key){
    var testMessage = 'TEST ERROR',
        testData = {foo: 'bar'},
        testDataWithMessage = {things: 'stuff', message: 'majigger'},
        error = new errorConstructor(),
        errorWithMessage = new errorConstructor(testMessage),
        errorWithData = new errorConstructor(testData),
        errorWithDataAndMessage = new errorConstructor(testDataWithMessage),
        fileName = errorConstructor.name.substring(0, 1).toLowerCase() +
            errorConstructor.name.substring(1) + '.js';

    t.ok(error instanceof Error, key + ' is instance of Error');
    t.ok(error instanceof errors.BaseError, key + ' is instance of BaseError');
    t.ok(error instanceof errorConstructor, key + ' is instance of ' + errorConstructor.name);

    t.ok(errors.BaseError.isGenericError(error), key + ' is a GenericError');
    t.ok(errors.BaseError.isGenericError(JSON.parse(JSON.stringify(error))), key + ' is a GenericError after serialization');

    t.ok(error.stack, key + ' has a stack');
    t.notOk(~error.stack.indexOf(fileName), key + ' stack trace should be trimmed');
    t.equal(error.message, errorConstructor.prototype.code + ': ' + errorConstructor.name, key + ' message defaulted correctly');
    t.equal(error.toString(), errorConstructor.prototype.code + ': ' + errorConstructor.name, key + ' toString is set correctly');
    t.equal(error.valueOf(), error, key + ' valueOf returns the instance');
    t.ok(error.code, key + ' has a code: ' + error.code);
    t.equal(error.code, errorConstructor.prototype.code, key + ' has correct code');
    t.equal(
        JSON.stringify(error),
        '{"__genericError":true,"message":"' +
            error.toString() +
            '","code":' +
            errorConstructor.prototype.code + '}',
            key + ' stringifys correctly');

    testInflation(t, error, key);

    t.equal(errorWithMessage.message, testMessage, key + ' message set correctly');
    t.equal(errorWithMessage.toString(), testMessage, key + ' toString correctly returns message');
    t.equal(
        JSON.stringify(errorWithMessage),
        '{"__genericError":true,"message":"' +
            testMessage +
            '","code":' +
            errorConstructor.prototype.code + '}',
            key + ' stringifys correctly');

    testInflation(t, errorWithMessage, key);

    t.equal(errorWithData.message, error.toString(), key + ' message set correctly with data');
    t.equal(errorWithData.toString(), errorConstructor.prototype.code + ': ' + errorConstructor.name, key + ' toString correctly returns message with data');
    t.equal(
        JSON.stringify(errorWithData),
        '{"__genericError":true,"foo":"bar","message":"' +
            error.toString() +
            '","code":' +
            errorConstructor.prototype.code + '}',
            key + ' stringifys correctly with data');

    testInflation(t, errorWithData, key);

    t.equal(errorWithDataAndMessage.message, testDataWithMessage.message, key + ' message set correctly with message in data');
    t.equal(errorWithDataAndMessage.toString(), testDataWithMessage.message, key + ' toString correctly returns message with message in data');
    t.equal(
        JSON.stringify(errorWithDataAndMessage),
        '{"__genericError":true,"things":"stuff","message":"' +
            testDataWithMessage.message +
            '","code":' +
            errorConstructor.prototype.code + '}',
            key + ' stringifys correctly with message in data');

    testInflation(t, errorWithDataAndMessage, key);
}

test('base', function(t){
    var keys = Object.keys(errors);

    t.plan(keys.length * 26);

    for(var key in errors){
        validateError(t, errors[key], key);
    }
});

