var _     =require('lodash'),
    path  =require('path'),
    grunt =require('grunt'),
    mixins=require('../mixins/mixins.js');

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
    }

    function expandDest(asset){
        var dest = asset.dest;
        var acc = [];
        if (!mixins.isDir(asset.dest)) return asset;
            _.forEach(asset.src,function(value){
            acc.push(asset.dest+path.basename(value));
        });
        asset.dest = acc;
    }
    function getAssetType(paths,mappings){
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
    }
    return {

		 	getAssetType : getAssetType,

            categorize : function categorize(assets,mappings){
                var categories = {};
                _.forEach(assets,function(val){
                    var asset_type = getAssetType(val,mappings);
                    if ( !_.isArray(categories[asset_type])) categories[asset_type] = [];
                    categories[asset_type].push(val);
                });
                return categories;
            },

            expand : function expand(asset){
            	expandSrc(asset);
            	expandDest(asset);
            }
    } 
}();