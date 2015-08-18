var assert = require("assert");
var validations = require('../grunt_assets/src/validations/assets.js');

var test_data = {
    'test_not_array': {
    },
    'test_empty_src' : [
        {src:'',dest:'/abc'}
    ],
    'test_empty_dest' : [
        {src:'abc',dest:''}
    ]
};


describe('validations', function() {
    describe('assets validate',function(){
        it('assets should be an array', function () {
            assert.throws(function(){
                validations.validate(test_data.test_not_array),""
            });
        });
    });
    describe('assets validate', function () {
        it('an empty string can\'t be a src', function () {
            assert.throws(function(){
                validations.validate(test_data.test_empty_src,"")
            });
        });
    });
    describe('assets validate', function () {
        it('an empty string can\'t be a dest', function () {
            assert.throws(function(){
                validations.validate(test_data.test_empty_src,"")
            });
        });
    });
});