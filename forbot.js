const fs = require("fs");
const login = require("fb-chat-api");
const axios = require('axios');
const request = require("request");
const sleep = require("system-sleep");
var x = require('string.prototype.startswith');
login({ appState: JSON.parse(fs.readFileSync('cookie.json','utf8')) }, (err, api) => {
  if (err) return console.error(err);
  api.setOptions({listenEvents: true})
  api.listen((err, message) => {
    if (err) return console.error(err);


if (message.body === "!!") {
   fs.readFile('./number.txt', 'utf8', (err, data) => {
   console.log (message)
   var lines = data.split('\n');
   var lenge = data.length;
   var counter = 0;
   var i = setInterval(function(){
   var sayser = lines[Math.floor(Math.random()*lines.length)]
   api.sendMessage(sayser,message.threadID);
   console.log ("time "+i)
   counter++;
   if(counter === 15) {
        clearInterval(i);
      }
     }, 0);
   });
}

});
});

process.on('uncaughtException', function
(err) {
});
process.on('unhandledRejection', function
(err) {
});
