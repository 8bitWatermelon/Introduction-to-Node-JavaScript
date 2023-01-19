let http = require("http");
let url = require("url");

const host = "127.0.0.1";
const port = 8080;

/*
    Allows us to pass parameters to the url of the server.
        Example: http://127.0.0.1:8080/?year=2017&month=2017
    Many more parameters can be passed to the url of the server, 
    it depends on the devloper and the website being made.
*/
let server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	let dateParameter = url.parse(req.url, true).query;
	let writeQuery = `${dateParameter.year} ${dateParameter.month}`;
	res.end(writeQuery);
});

console.log('Use "control + c" to close the connection!');
server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
