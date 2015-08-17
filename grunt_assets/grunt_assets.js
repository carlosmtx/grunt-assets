module.exports = function(){
    console.log('grunt_assets started');
    var _       =  require('lodash'),
        grunt   =  require('grunt');

    var _assets      = require('./config/assets.js'),
        _vendor      = require('./config/assets_vendor.js'),
        mappings     = require('./config/mappings.js'),
        assetManager = require('./src/asset/asset_manager.js'),
        validations  = {
            mappings    : require('./src/validations/mappings.js'),
            assets      : require('./src/validations/assets.js')
        };

    validations.mappings.validate(mappings);
    validations.assets.validate(_assets, 'assets.js');
    validations.assets.validate(_vendor, 'assets_vendor.js');

    var assets = {
        vendor: [],
        assets: []
    };
    _.forEach(_assets,function(asset){
        assetManager.expand(asset);
        assets.assets.push(asset);
    });

    _.forEach(_vendor,function(asset){
        assetManager.expand(asset);
        assets.vendor.push(asset);
    });

    assets.vendor = assetManager.categorize(assets.vendor, mappings);
    assets.assets = assetManager.categorize(assets.assets, mappings);

    return assets;
}();