const http = require("http");
let fileStream = require("fs");

let host = "127.0.0.1";
let port = 8080;

let server = http.createServer((req, res) => {
	fileStream.readFile("demofile1.html", (err, data) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		res.end();
	});
});

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
