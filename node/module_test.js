const http = require("http");
const dm = require("./myfirstmodule");

const host = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/html" });
	res.write(`The date and time currently is: ${dm.dateModule()}`);
	res.end();
});

console.log("Use control + c to close the connection!");
server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
