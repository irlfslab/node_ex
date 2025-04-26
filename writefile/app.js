const fs = require("fs");
const filename = 'outfile1.md';

let md = `
This is a new output file
=========================

    ES6 Template Strings are cool. 

    * Template Strings
    * Node File System
`;
if (fs.existsSync (filename)) {
  fs.unlink(filename, (err) => {
   if (err) {
       console.error ('Error removing file: ${err}')
      };
    console.log(`File ${filename} has been successfully removed`)
    }
  )}

fs.writeFile(filename, md.trim(), function (err) {
  if (err) {
    throw err;
  }
  fs.appendFileSync(
    filename,
    "\n\n### Node.js"
  );
  console.log("Markdown Created");
});
