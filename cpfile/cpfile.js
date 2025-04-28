const fs = require('fs'); 
  
// Get the current filenames 
// before copy function 
getCurrentFilenames(); 
console.log("\nFile Contents of file1.txt:", 
      fs.readFileSync("file1.txt", "utf8")); 
  
fs.copyFileSync("file1.txt", "file2.txt"); 
  
// Get the current filenames 
// after copy function 
getCurrentFilenames(); 
console.log("\nFile Contents of file2.txt:", 
      fs.readFileSync("file2.txt", "utf8")); 
  
// Function to get current filenames 
// in directory 
function getCurrentFilenames() { 
  console.log("\nCurrent files in directory:"); 
  fs.readdirSync(__dirname).forEach(file => { 
    console.log(file); 
  }); 
} 
