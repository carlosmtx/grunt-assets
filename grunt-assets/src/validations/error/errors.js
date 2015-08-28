module.exports = function(){
    return {
        default_error: function (file, key, message) {
            return 'Error in file:' + file + ", index: " + key  + ' : Description: ' + message;
        }
    };
}();