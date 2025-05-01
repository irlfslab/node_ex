const fs = require("fs");

// Synchronous version
try {
  fs.renameSync("./accounts", "./library");
  console.log('Directory renamed successfully (sync)!');
} catch (err) {
  console.error('Error renaming directory (sync):', err);
}
