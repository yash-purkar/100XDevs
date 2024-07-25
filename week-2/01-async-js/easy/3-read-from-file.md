## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

ANSWER =>

const fs = require("fs");

// This is an asynchronous task
// We can also read js files.

console.log("Started file reading")

fs.readFile("a.txt",'utf-8', (err,data)=>{
console.log("File reading done")
console.log(`Data: ${data}`)
});

console.log("Started heavy task")

for(let i=0; i<10000000000;i++){
// some heavy operation
}
console.log("Heavy task done")

/\*\*

- 'utf-8' is the second parameter, which specifies the encoding format of the file. 'utf-8' is a widely used encoding format for text files in JavaScript and most programming environments. It indicates that the content of the file should be interpreted as UTF-8 encoded text.
-

fs.readFile is a async task it is like setTimeout which waits in the webapi until timer is done,
fs.readFile's callback is wait in the node js enviroment somewhere, (without blocking the main thread) and once file is read it push the callback function in callback quere with the data.
\*/
