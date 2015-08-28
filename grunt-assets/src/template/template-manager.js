var _ = require('lodash');
module.exports.generate = function(grunt){
    var files = {
        'assets_config/assets.js'       : 'templates/assets.json',
        'assets_config/asset_vendor.js' : 'templates/assets_vendor.json',
        'assets_config/mappings.js'     : 'templates/mappings.json'
    };
    _.forOwn(files,function(src,dest){
        if(!grunt.file.exists(dest)){
            grunt.file.copy(__dirname+'\\'+src,dest);
        }
    })
};