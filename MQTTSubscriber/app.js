// var mqtt = require('mqtt');
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.40')
client.on('connect', function () {
    client.subscribe('#');
})
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
})