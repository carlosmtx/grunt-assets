var grunt  = require('grunt');
var AssetsManager = require('./grunt-assets/grunt-assets.js');

var manager = AssetsManager.build(grunt);
var assets = manager.getAssets();
console.log(manager.getSrcOnly(assets).assets);


grunt.initConfig({
    uglify: {
        prod: {
            files: assets.assets.javascript
        }
    },
    cssmin: {
        prod: {
            files: assets.assets.css
        }
    }

});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['uglify:prod']);
grunt.registerTask('prod', ['uglify:prod','cssmin:prod']);

