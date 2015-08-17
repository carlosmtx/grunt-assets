var _       = require('lodash'),
    error   = require('./error/errors.js');

module.exports.validate = function(assets,file){
    // TODO: check if src array is empty
    if(!_.isArray(assets)) throw error.default_error(file, '\'\'','expected an array of assets');
    _.forEach(assets,function(val,key){
        if( !(_.isString(val.src)  || _.isArray(val.src)))  throw error.default_error(file, key,'\'src\'  must be a string or an array');
        if( !_.isString(val.dest))                          throw error.default_error(file, key,'\'dest\' must be a string');
        if(_.isArray(val.src) && _.includes(val.src,''))                          throw error.default_error(file, key,'\'src\' can\'t be an empty string');
        if(val.dest === ''       )                          throw error.default_error(file, key,'\'dest\' can\'t be empty');
    });
};