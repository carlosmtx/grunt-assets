var _     =require('lodash'),
    path  =require('path'),
    grunt =require('grunt'),
    mixins=require('../mixins/mixins.js');

module.exports = function(){
    // Transforms a glob into an array of files.
    // If no glob is provided the path is maintained

    //If the destiny is a file the path is maintained
    //Otherwise for each src
    function expandDest(asset){
        var acc = [];
        if (!mixins.isDir(asset.dest)) return [asset];
        _.forEach(asset.src,function(value){
            acc.push({
                src:  asset.dest+path.basename(value),
                dest: asset.value
            });
        });
        return asset;
    }
    function getAssetType(paths,mappings){
        var fileType = [];
        if (_.isArray(paths)) paths = [paths];
        _.forEach(paths,function(val){
            var extension = path.extname(val);
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
            asset = expandSrc(asset);
            console.log(asset);
            return expandDest(asset);
        }
    }
}();