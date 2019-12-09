// var mqtt = require('mqtt');
// var client = mqtt.connect("mqtt://192.168.1.40");
// client.on('connect',function(){

// })

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.51');
client.on('connect', function () {
setInterval(function() {
client.publish('IoT member', 'Umer here');
console.log('buhahahah');
}, 5000);
});