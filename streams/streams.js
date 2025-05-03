
const fs = require("fs");

let stream = fs.createReadStream(
  "./chat-logs/chat-data.log",
  "UTF-8"
);

let data;

stream.on("data", (chunk) => {
  console.log(chunk, toString());
});

stream.on("end", () => {
  console.log('>> end event');
});

console.log("Reading the file");

