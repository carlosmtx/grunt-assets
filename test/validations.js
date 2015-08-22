var assert = require("assert");
var validations = {
    assets: require('../grunt_assets/src/validations/assets.js'),
    files : require('../grunt_assets/src/validations/files.js')
};

var test_data = {
    'test_not_array': {
    },
    'test_empty_src' : [
        {src:'',dest:'/abc'}
    ],
    'test_empty_dest' : [
        {src:'abc',dest:''}
    ],
    'test_correct_data' :[
        {src:'abc',dest:'abc    '}
    ]
};


describe('Testing Assets Validation Validations', function() {
    describe('passing empty data to validate function',function(){
        it('should throw an error', function () {
            assert.throws(function(){
                validations.assets.validate(test_data.test_not_array);
            });
        });
    });
    describe('passing and empty string as a src to validate function', function () {
        it('should throw an error', function () {
            assert.throws(function(){
                validations.assets.validate(test_data.test_empty_src,"")
            });
        });
    });
    describe('passing an empty string as a destination ', function () {
        it('should throw an error', function () {
            assert.throws(function(){
                validations.assets.validate(test_data.test_empty_src,"")
            });
        });
    });
    describe('passing correct argumetns',function(){

    });
});

describe('Testing File Validations',function(){
    describe('passing a non existent file to validate function',function(){
        it('should throw an error', function () {
            assert.throws(function(){
                validations.files.validate(["fasfsg.fg"])
            });
        });
    });
    describe('passing an existent file to validate function',function(){
        it('should not throw an error', function () {
            assert.equal(validations.files.validate(['']),true);
        });
    });


});
