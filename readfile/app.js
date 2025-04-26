const fs = require("fs");

fs.readFile("./readme.md", "UTF-8", (err, file1) => {
  console.log(file1);
});

console.log("reading the file..."
