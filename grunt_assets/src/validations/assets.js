var _= require('lodash');

module.exports.validate = function(assets,env){
    //TODO: Refactor exception messages out + check if src array is empty
    var file_str = 'config/assets_vendor';
    if (env === 'vendor') file_str = 'config/assets.js';

    if(!_.isArray(assets)) throw 'File: ' + file_str + ' must be an array';
    _.every(assets,function(val,key){
        console.log(val.src);
        if( !(_.isString(val.src)  || _.isArray(val.src)))   throw 'File: ' + file_str + ' - Key:' + key +': src must be a string or an array';
        if( !_.isString(val.dest))                           throw 'File: ' + file_str + ' - Key:' + key +': dest must be a string';
        if(_.includes(val.src,''))                           throw 'File: ' + file_str + ' - Key'  + key +': src must not be empty';
        if(_.includes(val.dest,''))                          throw 'File: ' + file_str + ' - Key'  + key +': dest must not be empty';
    });
};