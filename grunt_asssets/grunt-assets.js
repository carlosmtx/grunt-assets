module.exports.build = function(grunt){
    var _            = require('lodash'),
        template     = require('./src/template/template-manager.js'),
        assetManager = require('./src/asset/asset-manager.js'),
        assetBuilder = require('./src/asset/asset-builder.js')(grunt),
        debug        = require('debug')('grunt-assets:grunt-assets.js');
    return {
        getAssets: function(){
            debug('starting');
            debug('reading assets&&mappings json files');
            var json_data = {
                assets  : grunt.file.readJSON('./assets_config/assets.json'),
                vendor  : grunt.file.readJSON('./assets_config/assets_vendor.json'),
                mappings : grunt.file.readJSON('./assets_config/mappings.json')
            };

            var assets_pre_processed = {
                assets:[],
                vendor:[],
                mappings:[]
            };
            debug('building assets from json src');
            _.forEach(json_data.assets,function(val){
                assets_pre_processed.assets.push(assetBuilder.build(val));
            });
            debug('building vendors from json src');
            _.forEach(json_data.vendor,function(val){
                assets_pre_processed.vendor.push(assetBuilder.build(val));
            });
            var assets = {
                vendor: [],
                assets: []
            };
            debug('expanding assets');
            _.forEach(assets_pre_processed.assets,function(asset){
                assets.assets = _.union(assets.assets, asset.toGruntAsset());
            });
            debug('expanding asset_vendor ');
            _.forEach(assets_pre_processed.assets,function(asset){
                assets.vendor = _.union(assets.vendor, asset.toGruntAsset());
            });

            assets.vendor = assetManager.categorize(assets.vendor, json_data.mappings);
            assets.assets = assetManager.categorize(assets.assets, json_data.mappings);

            debug('ended,returning categorized assets');
            return assets;
        }
    };
};