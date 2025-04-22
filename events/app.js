const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Test event", "User 1");
emitter.emit("customEvent", "Type 'exit'", "Exit")

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Exit ", "process");
    process.exit();
  }
  emitter.emit(
    "customEvent",
    data.toString().trim(),
    "terminal"
  );
});
