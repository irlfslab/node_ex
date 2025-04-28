const fs = require ("fs");

if (fs.existsSync("newdir")) {
  console.log("directory already there!");
} else {
  fs.mkdir("newdir", function (err) {
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      console.log("directory created");
    }
  });
}
