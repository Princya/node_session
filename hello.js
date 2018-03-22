// you should import the module which you want to use it here
// for local file import we need to use ./ type
// prefer 'const' keyword to import another module
const logObject = require('./logger')

// for in-build methods no need to use ./
const os = require('os')

/*function sayHello(message){console.log(message);}
sayHello('hello');*/

// here log function called by the name of logging
// ex: for module.exports.logging = log

//logObject.logging('hello')

// here log function called directly by logObject
// ex: for module.exports = log

logObject("hi")

// module is used to know about this hello.js module like who is the parent of thi module , children, filename etc
console.log(module);


