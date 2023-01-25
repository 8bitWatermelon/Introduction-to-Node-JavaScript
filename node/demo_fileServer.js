let http = require("http");
let url = require("url");
let fs = require("fs");

const host = "127.0.0.1";
const port = 8080;

let server = http.createServer((req, res) => {
	let q = url.parse(req.url, true);
	let fileName = "." + q.pathname;
	fs.readFile(fileName, function (err, data) {
		if (err) {
			res.writeHead(404, { "Context-Type": "text/html" });
			return res.end("404 Page Not Found!");
		}

		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

console.log('Use "control + c" to close the connection!');
server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
