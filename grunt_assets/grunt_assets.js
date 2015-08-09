console.log('grunt_assets started');

var assets      = require('./config/assets.js'),
    vendor      = require('./config/assets_vendor.js'),
    mappings    = require('./config/mappings.js');
    validations = {
        mappings    : require('./src/validations/mappings.js'),
        assets      : require('./src/validations/assets.js')
    };
    validations.mappings.validate(mappings);
    validations.assets.validate(assets);

console.log("grunt_assets ended");

/**
 * 1. Check if config files have errors
 * 2. Load preferences.js
 * 3. Load assets.js
 *  3.1 - If 'src' is a folder
 *          3.1.1 - If the dest if a folder
 *              3.1.1.1 - add files to vendor object
 *          3.1.2 If the destination is a file
 *              3.1.2.1 - check mappings
 *              3.1.2.2 - add files to object
 *  3.2 - If it's a file or a array of files
 *      3.2.1 If File doesn't exist
 *          3.2.1.1 Add prefixes and try again
 *      3.2.2 Store a {'src','dest'} object folder
 *
 *
 *
 *  3.3 If the path is not valid try adding
 * 4.
 * 2.
 * 2. For Each Type Execute a Task
 *  2.1 Javascript : prod ? uglify : concat
 *  2.2 CSS        : prod ? minify : concat
 *  2.3 SCSS/SASS  : prod ? minify : compile
 *  2.4 Fonts      : copy
 *  2.5 Images     : copy
 *
 */