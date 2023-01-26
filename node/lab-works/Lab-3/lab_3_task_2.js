const http = require("http");
const events = require("events");
const myModule = require("./Lab3Task2Module");

const eventEmitter = new events.EventEmitter();

const host = "127.0.0.1";
const port = 8080;

// Event handler requests
var myEventHandler = () => {
	console.log("Student Program: JavaScript");
};

eventEmitter.on("info", myModule.myModuleEventHandler);
eventEmitter.on("info", myEventHandler);
eventEmitter.emit("info");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("<h1>");
	res.write("Executed Successfully");
	res.write("</h1>");
	res.end();
});

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}`);
});
