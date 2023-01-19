const http = require("http");
const fileStream = require("fs");

const host = "127.0.0.1";
const port = 8080;

const fileName = "mynewfile.html";
let message =
	"<!Doctype html>\n" +
	'<html lang="en">\n' +
	"<head>\n" +
	"<title>Document</title>\n" +
	"</head>\n" +
	"<body>" +
	"<h1>Hello Append</h1>\n" +
	"<h2>Hello Append</h2>\n" +
	"<h3>Hello Append</h3>\n" +
	"</body>\n" +
	"</html>";

fileStream.appendFile(fileName, message, function (err) {
	if (err) throw err;
	console.log("The file is being created..........\nThe file was saved!");
});

const server = http.createServer((req, res) => {
	fileStream.readFile(fileName, function (err, data) {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(data);
		res.end();
	});
});

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
