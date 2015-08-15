var _   = require('lodash'),
    path= require('path'),
    grunt=require('grunt');

module.exports = function(){

    function expandSrc(asset){
        var acc = [];
        _.forEach(_.isArray(asset.src) ? asset.src : [asset.src],function(val,key){
                var expanded = grunt.file.expand(val);
            if(_.isEmpty(expanded)){
                throw "Inexistent or wrong path provided: " + val;
            }
            acc.push(expanded);
        });
        asset.src = _.flatten(acc);
    };

    function expandDest(asset){
        var dest = asset.dest;
        var acc = [];
        if (!grunt.file.isDir(asset.dest)) return asset;
            _.forEach(asset.src,function(value){
            acc.push(asset.dest+path.basename(value));
        });
        asset.dest = acc;
    };
            
    return {

		 	getAssetType : function getFileType(paths,mappings){
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
            },

            categorize : function categorize(assets,mappings){
                var categories = {};
                _.forEach(assets,function(val){
                    categories[module.exports.getFileType(val,mappings)] = val;
                });
                return categories;
            },

            expand : function expand(asset){
            	expandSrc(asset);
            	expandDest(asset);
            }
    } 
}()