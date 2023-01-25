const http = require("http");
const fm = require("formidable");
const fs = require("fs");

const host = "127.0.0.1";
const port = 8080;

let server = http.createServer((req, res) => {
	if (req.url == "/fileUpload") {
		let form = new fm.IncomingForm();
		form.parse(req, (err, fields, files) => {
			let oldPath = files.fileToUpload.filepath;
			let newPath = `C:/Users/enoab/${files.fileToUpload.originalFileName}`;
			fs.rename(oldPath, newPath, (err) => {
				if (err) throw err;
				res.write(`File uploaded successfully to ${newPath}`);
				res.end();
			});
			if (err) {
				console.log(
					`The file could not be uploaded due to complications\n Please check the path - ${newPath} and try again!`
				);
			}
			res.write("The file was uploaded succesfully! to " + newPath);

			res.end();
		});
	} else {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(
			"<form action='fileUpload' method='post' target='_self' enctype='multipart/form-data'>"
		);
		res.write(
			"<input type='file' name='fileToUpload' placeholder='Upload a file'><br>"
		);
		res.write("<input type='submit' placeholder='upload file'>");
		res.write("</form>");
		return res.end();
	}
});

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}`);
});
