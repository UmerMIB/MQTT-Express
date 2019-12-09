// var mosca = require('mosca'); // mosca act as a broker : publisher k topic ko subscriber tk leky jany wala
// var setting = {
//     port = 1883
// }
// var server = new mosca.Server(setting);
// server.on('ready',function(){
//     console.log('ready');
// });



var mosca = require('mosca');
var settings = {
		port:1883
}
 
var server = new mosca.Server(settings);
 
server.on('ready', function(){
console.log("ready");
});