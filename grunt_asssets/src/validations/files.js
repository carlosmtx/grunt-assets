var _       = require('lodash'),
    error   = require('./error/errors.js'),
    exception= require('./exception/Exception.js');


module.exports.validate = function(files,grunt){
    _.forEach(files,function(_file){
        if (!grunt.file.exists(_file)) {
            grunt.log.error(error.default_error(_file,'','not found'));
            throw new exception.Exception();
        }
    });
    return true;
};
