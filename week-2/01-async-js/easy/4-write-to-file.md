## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

console.log("Started adding content in file")

fs.writeFile("b.txt", "Adding content in empty file", 'utf-8',(err) => {
  console.log("Added content in file")
  if(err){
    console.log("Failed to add the content in the file!")
  }
});

console.log("Started reading file")
fs.readFile("b.txt",'utf-8',(err,data)=>{
  console.log("File reading done")
  console.log(`Data => ${data}`)
});

// Both task happens asynchronously

<!-- See the 3-read-from-file.md code explanation for better understanding -->