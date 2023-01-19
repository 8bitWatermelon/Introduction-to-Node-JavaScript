"use strict";
import { createServer } from "http";

createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(
		"Hello, World -- My name is Enoabasi Essien\n I am running late for classification class."
	);
}).listen(8080);
