const fs = require('fs');

// Create readable and writable streams
const readableStream = fs.createReadStream('./chat-logs/chat-data.log');
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

writableStream.on('finish', () => {
  console.log('Data has been piped successfully.');
});
