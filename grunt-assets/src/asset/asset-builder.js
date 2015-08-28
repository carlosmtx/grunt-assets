module.exports = function(grunt){
    var debug = require('debug')('grunt-assets:asset-builder.js'),
        Asset = require('./Asset.js');
    return {
        build : function(jsonSrc){
            debug('builing a new Asset');
            var asset;
            if(jsonSrc){
                debug('building from existent json src');
                asset = new Asset(jsonSrc.src,jsonSrc.dest);
            } else {
                debug('building empty asset');
                asset = new Asset();
            }
            asset._grunt = grunt;
            debug('built asset');
            return asset;

        }
    }

};