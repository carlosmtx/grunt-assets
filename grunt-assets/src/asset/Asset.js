var debug = require('debug')('grunt-assets:Asset.js');
var mixins= require('../mixins/mixins.js');
var _= require('lodash');
var path  =require('path');
module.exports = function(){
    debug('building asset definition');
    var Asset = function Asset(src,dest){
        if(src)  this.src  = src;
        if(dest) this.dest = dest;
        return this;
    };
    debug('building defining prototype');
    Asset.prototype = {
        src   : '',
        dest  : '',
        _src  : [],
        _grunt: {},
        clone : function () {
            return new Asset(this.src, this.dest);
        },
        toGruntAsset: function(){
            debug('converting Asset to grunt asset type');
            this._expandSrc();
            var acc = [];
            if(mixins.isDir(this.dest)){
                debug('dest is a dir');
                _.forEach(this._src,function(value){
                    acc.push({
                        src : value,
                        dest: this.dest + path.basename(value)
                    });
                },this);
            } else {
                debug('dest is not a dir');
                acc.push({
                    src: this._src,
                    dest: this.dest
                });
            }
            return acc;
        },
        _expandSrc: function(){
            debug('expanding src');
            this._src = [];
            _.forEach(_.isArray(this.src) ? this.src : [this.src],function(val){
                var expanded = this._grunt.file.expand(val);
                this._src.push(expanded)
            },this);
            debug('flattening expanded src');
            this._src = _.flatten(this._src);
        }
    };
    debug('ended asset definition');
    return Asset;
}();

