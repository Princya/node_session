const fileSystem = require('fs')

// sample for synchronous call
// here callback doesn't work -> error method will not excecute . because it is synchronous

/*fileSystem.writeFileSync('writeFile', 'Text written from filesystem module', (err) => {
    if (error)
        console.error(error)
    else
        console.log('file writing success')
})
console.log("Done synchronous call")*/

//Asynchronous call
//here call back will work -> because its will not wait for response, it will go to excecute next line. When it get response it will give resp
fileSystem.writeFile('wFile', 'Text written from filesystem module','utf8', (error) => {
    if (error)
        console.error(error)
    else
        console.log("File written")
})
console.log("Done")


fileSystem.readFile("writeFile",'utf8' ,(err, data) => {
    if(err) console.error(err)
    else console.log(data.toString())
})

