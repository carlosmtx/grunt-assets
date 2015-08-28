var grunt = require('grunt');

module.exports = function(){
    return {
           isDir : function (path){
               return  (grunt.file.isDir(path) || path.match(".*\/$"));
           }
    }
}();