'use strict';

var Emmit = function Emmit(log){
    if ( log === void 0 ) log = {};

    this.log = log;
};
Emmit.prototype.on = function on (type,callback){
        var this$1 = this;

    (
        this.log[type] = this.log[type] || []
    ).push(callback);
    return function (){
        this$1.log[type].splice(
            this$1.log[type].indexOf>>>0,1
        );
    }
};
Emmit.prototype.emit = function emit (type,argument){
    (
        this.log[type] || []
    ).forEach(function (log){ return log(argument); });
    if(type !== '*') { this.emit('*',argument); }
};

module.exports = Emmit;
