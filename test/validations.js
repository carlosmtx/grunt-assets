console.log(__dirname);
var assert = require("assert"),
    grunt  = require("grunt"),
    validations = {
        assets: require('./src/validations/assets.js'),
        files : require('./src/validations/files.js')
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
    ],
    'unexistent_file' : [
        'dasdasdas.dasdasdas'
    ],
    'existent_file' :[
        'package.json'
    ]
};
grunt.log.muted = true;

describe('Testing Assets Validation Validations', function() {
    describe('passing empty data to validate function',function(){
        it('should throw an error', function () {
            assert.throws(function(){
                validations.assets.validate(test_data.test_not_array,grunt);
            });
        });
    });
    describe('passing and empty string as a src to validate function', function () {
        it('should throw an error', function () {
            assert.throws(function(){
                validations.assets.validate(test_data.test_empty_src,"",grunt);
            });
        });
    });
    describe('passing an empty string as a destination ', function () {
        it('should throw an error', function () {
            assert.throws(function(){
                validations.assets.validate(test_data.test_empty_src,"",grunt);
            });
        });
    });
    describe('passing correct arguments',function(){

    });
});

describe('Testing File Validations',function(){
    describe('passing a non existent file to validate function',function(){
        it('should throw an error', function () {
            assert.throws(function(){
                validations.files.validate(test_data.unexistent_file,grunt)
            });
        });
    });
    describe('passing an existent file to validate function',function(){
        it('should not throw an error', function () {
            assert.equal(validations.files.validate(test_data.existent_file,grunt),true);
        });
    });
});
