let hello = "Hello World from Node.js";
let justNode = hello.slice(17);
console.log(`Who let the ${justNode} out?`);

const path = require("path");

console.log(__dirname);
console.log(
  `The file name is ${path.basename(__filename)}`
);

for (let key in global) {
  console.log(key);
}

