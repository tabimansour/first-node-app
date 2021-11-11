/*
    console.log() is a global object that can be used anywhere in javascript
    setTimeout() is an object that calls a function after a delay
    clearTimeout() clears all previous timeouts
    setInterval() call a function repeatedly
    clearInterval() clears all previous setIntervals()

    in node.js global is replacing window
    global.console.log() is a replaceable of window.console.log() for example

    https://nodejs.org/dist/latest-v16.x/docs/api/

    NODE.JS Modules are:
    os
    fs
    events
    http
*/
const path = require('path');
const os = require('os');
const fs = require('fs');

var linked = require('./module1');

function sayHello(name) {
    console.log('Hello ' + name + ', how are you today?');
}

sayHello('Theodor');



console.log(linked);

console.log(__filename);
console.log(__dirname);

var obj = path.parse(__filename);
var win = path.win32;

console.log(obj);
console.log(win);

var osv = os.version();
var uptime = os.uptime();

console.log(`Operating System's Version: ${osv}`);
console.log(`OS Uptime ${uptime}`);

var files = fs.readdirSync('./');
console.log(files);

/* Asynchronus */
fs.readdir('../', function(err, files){
    if(err) {
        console.log(err);
    } else {
        console.log(files);
    }
});