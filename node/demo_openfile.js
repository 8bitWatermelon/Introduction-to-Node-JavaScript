const fileStream = require("fs");

fileStream.open("mynewfile2.txt", "w", function (err, file) {
	if (err) throw err;
	console.log(file);
});
