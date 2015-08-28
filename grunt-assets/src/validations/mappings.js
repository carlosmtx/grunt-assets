var _    = require('lodash'),
    error= require('./error/errors.js');
module.exports.validate = function(extensions,grunt){
    var arrUnion = [];
    var lengthA = 0;

    _.forEach(extensions,function(n,key){
        if (! _.isArray(n)) throw 'File: config/mappings - \'' + key + '\' must be an array';
        lengthA+= n.length;
        arrUnion = _.union(arrUnion,n);
    });
    if ( lengthA != arrUnion.length ) throw 'File: config/extension.js - Extensions must be unique';
    if (_.includes(arrUnion,''))      throw 'File: config/extension.js - A mappings should not have an empty value';
};