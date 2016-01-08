var events  = require('events');
var debug   = require('debug')('mockrpc');


function mocksocket() {

    debug("new instance");

    this.address_ = "127.0.0.1";
    //this.port = 9999;
    //
    //
    this.port = exports.freeport.port;
    exports.freeport.port--;


    
    debug("new instance port: %s", this.port);

    events.EventEmitter.call(this);


    this.send = function(msg) {
    
        debug("emit message");
        this.emit('message', msg, { address: this.address_, port: this.port});
    };

    this.address = function () {
        //debugger;
        //return this.address_ + ":" + this.port;
        //
        return {
            port: this.port,
            address: this.address_
        };
    };

    this.bind = function (port, address) {
        
        debug("bind port: %s address: %s", port, address);
        if(port && address) {
            this.address_ = address;
            this.port = port;
        }
    };

    var scope = this;
    setTimeout(function () {
        debug("emit listening");
        scope.emit('listening');
    }, 1000);

}

var freeport = function () {

    this.port = 9999;
};

mocksocket.prototype.__proto__ = events.EventEmitter.prototype;


exports.freeport = new freeport();
module.exports = mocksocket;
