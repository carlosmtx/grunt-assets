var grunt  = require('grunt');
var assets = require('./grunt_assets/grunt_assets.js');

console.log(assets.assets.javascript);

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

