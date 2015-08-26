var _        = require('lodash'),
    error    = require('./error/errors.js'),
    exception= require('./exception/Exception.js');

module.exports.validate = function(assets,file,grunt){
    // TODO: check if src array is empty
    if(!_.isArray(assets)){
        grunt.log.error(error.default_error(file, '\'\'','expected an array of assets'));
        throw new exception.Exception();
    }
    _.forEach(assets,function(val,key){
        if(val.src  === ''       ) {
            grunt.log.error(error.default_error(file, key,'\'src\' can\'t be empty'));
            throw new exception.Exception();
        }
        if(val.dest === ''       ){
            grunt.log.error(error.default_error(file, key,'\'dest\' can\'t be empty'));
            throw new exception.Exception();
        }
        if( !(_.isString(val.src)  || _.isArray(val.src))){
            grunt.log.error(error.default_error(file, key,'\'src\'  must be a string or an array'))
            throw new exception.Exception();
        }
        if( !_.isString(val.dest)){
            grunt.log.error(error.default_error(file, key,'\'dest\' must be a string'))
            throw new exception.Exception();
        }
        if(_.isArray(val.src) && _.includes(val.src,'')){
            grunt.log.error(error.default_error(file, key,'\'src\' can\'t be an empty string'))
            throw new exception.Exception();
        }
    });
};