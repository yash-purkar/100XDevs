## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

ANSWER =>

const fs = require("fs");

console.log("Started file reading");

fs.readFile("a.txt", "utf-8", (err, data) => {

console.log(`File read ${data}`);

// Removing all spaces from in between using regex
const newData = data.replace(/\s+/g, " ");

console.log(`Started updating file`);
fs.writeFile("a.txt", newData, "utf-8", (err) => {
if (err) throw err;
console.log("The file has been updated!");

    console.log("Started file reading again");

    fs.readFile('a.txt','utf-8',(err,data) => {
      console.log(`Updated file content: ${data}`);
    })

});
});

https://replit.com/@YashPurkar/01asyncmedium#index.js

// output
Started file reading
File read hello world my name is raman
Started updating file
The file has been updated!
Started file reading again
Updated file content: hello world my name is raman
