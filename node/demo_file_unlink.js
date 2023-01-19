const fileStream = require("fs");

const fileName = "mynewfile2.txt";

fileStream.unlink(fileName, function (err) {
	if (err) throw err;
	console.log(`File ${fileName} has been deleted from the system!`);
});
