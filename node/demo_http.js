/* NODE JS as a Web Server 
    - Creating a web server 
    - Adding an HTTP header 
*/
const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;
let statusCode = 200;

const server = http.createServer((req, res) => {
	res.writeHead(statusCode, { "Content-Type": "text/html" });
	res.write("Hello World, Enoabasi Essien!\n");
	res.end();
});

console.log('Use "control + C" to close the connection ->');
server.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}`);
});
