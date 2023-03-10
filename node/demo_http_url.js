/* Reading the query string */
const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;
let statusCode = 200;

const server = http.createServer((req, res) => {
	res.writeHead(statusCode, { "Content-Type": "text/html" });
	res.write(req.url.toString());
	res.end();
});

console.log('Use "control + C" to close the connection ->');
server.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}`);
});
