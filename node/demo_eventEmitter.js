const events = require("events");
let eventEmitter = new events.EventEmitter();

let myEventHandler = (event) => {
	console.log("I hear a scream!");
};

// Assinging the event handler to the event emitter
eventEmitter.on("scream", myEventHandler);

// Fire the scream event
eventEmitter.emit("scream");
