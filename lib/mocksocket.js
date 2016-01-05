var events = require('events');

function mocksocket() {


    events.EventEmitter.call(this);


    this.send = function(msg) {
        this.emit('message');
    };

    this.address = function () {
        return {
            port: 8080
        };  
    };

    this.bind = function () {

    };
}


mocksocket.prototype.__proto__ = events.EventEmitter.prototype;


module.exports = mocksocket;
