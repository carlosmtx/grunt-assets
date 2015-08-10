var _   = require('lodash'),
    path= require('path');

module.exports.getFileType = function getFileType(paths,mappings){
    var fileType = [];
    if (_.isArray(paths)) paths = [paths];
    _.forEach(paths,function(val){
        var extension = path.extname(val);
        var type = '';
        _.forEach(mappings,function(val,key){
            if (_.include(val,extension)) fileType.push(key);
        });
    });
    var extension = _.union(fileType);
    if( extension.length === 0) throw 'Invalid extensions found';
    if( extension.length >   1) throw 'Multiple fileTypes in the same asset';
    return _.first(extension);
};

module.exports.categorize = function(assets,mappings){
    var categories = {};
    _.forEach(assets,function(val){
        categories[module.exports.getFileType(val,mappings)] = val;
    });
    return categories;
};

return module.exports;