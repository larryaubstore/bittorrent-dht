var events  = require('events');
var debug   = require('debug')('mockrpc');


function random (low, high) {
    return parseInt(Math.random() * (high - low) + low);
}

function mocksocket() {

    debug("new instance");

    var _isClosed = false;

    this.address_ = "127.0.0.1";
    this.port = random(1, 9999);

    this.eventEmitter = new events.EventEmitter();
    //exports.freeport.port--;


    this.emit = function(arg1, arg2, arg3, arg4) {
        this.eventEmitter.emit(arg1, arg2, arg3);
    };
    
    debug("new instance port: %s", this.port);

    //events.EventEmitter.call(this);


    this.send = function(arg1, arg2, arg3, arg4) {
        if(_isClosed == false) {
            debug("emit message");
            debugger;
            this.emit('message', msg, { address: this.address_, port: this.port});
        }
    };

    this.address = function () {
        return {
            port: this.port,
            address: this.address_
        };
    };

    this.bind = function (port, address) {

        debugger;        
//        if(port && address) {
//            debug("bind port: %s address: %s", port, address);
//            this.address_ = address;
//            this.port = port;
//        }
    };

    this.close = function () {
        _isClosed = true;
    };

    

    var scope = this;
    if(_isClosed == false) {
        debug("emit listening");
        scope.emit('listening');
    }

}

//var freeport = function () {
//    this.port = 9999;
//};

//mocksocket.prototype.__proto__ = events.EventEmitter.prototype;


//exports.freeport = new freeport();
module.exports = mocksocket;
