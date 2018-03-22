// os is a pre defined (built-in) module

const os = require('os')
var CPU = os.cpus()
// check ur
console.log(CPU)
// check totalmemory of ur system
console.log(os.totalmem()/(1024*1024*1024))

//What is node:
// Server-side and clint side
// Single-threaded
// Non-blocking-IO
// Asynchronous -> call back methodology -> It will not wait for response, it will go for excecute the next line
   // Its not synchronous based , because it will wait for response, then only next line excecuted
// IOIntensiveApplication -> Single thread based -> single thread is used for multiple customers
      // -> Its not CPU_Intesive_APllication -> becase CPUIA is process based
// Google Chrome's JavaScript Engine (V8 Engine) wrapped by C++
// Global object is available instead for Window object in js


// to serve on browser
const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello Princy!!!')
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');