const fs = require("fs");

fs.renameSync("./lib/readme.md", "./lib/readme-file.md");

console.log("readme file renamed");

fs.rename("./lib/readme-file.md", "./readme-file.md", function (err) {
  if (err) {
    throw err;
  }
  console.log("Notes markdown file moved");
});
