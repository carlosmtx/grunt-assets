var _   = require('lodash'),
    path= require('path');

function getFileType(path,mappings){

}


module.exports.getFileType = function getFileType(paths,mappings){
    var fileType = [];
    if (_.isArray(paths)) paths = [paths];
    _.forEach(paths,function(val){
        var extension = path.extname(val);
        var type = '';
        _.forEach(mappings,function(val,key){
            if (_.include(val,extension)) fileType.push(extension);
            return false;
        });
    });
    console.log(fileType);
    var extension = _.union(fileType);
    if( extension.length === 0) throw 'Invalid extensions found';
    if( extension.length >   1) throw 'Multiple fileTypes in the same asset';
    console.log(extension);
    return extension[0];
};
return module.exports;