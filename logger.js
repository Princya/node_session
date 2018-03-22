console.log( __filename, __dirname)

function log(message){
  console.log(message);
}

// you can't use this message method outside of this module. because you didn't export it.
function message(value){
  // use tilt symbol to print like string and variable
  console.log(`this is ${value}`)
}
message('test method')

// Every method in this module I mean hello.js will be like private access only until u export it.
// create alice name for this module (like object)
// this log(message) function will be exported in the name of 'logging'
// so u need to call log method outside from this module means u have to use logging instead of log
// u can only call log method only, u can't call message() method because you didn't export it

//module.exports.logging = log;

// u can call log method outside of this module by same name itself.
module.exports = log






