const fileStream = require("fs");

let message = "\n6720006      7415849";

fileStream.appendFile("mySubjects.txt", message, function (err) {
	if (err) throw err;
	console.log("File has been Updated!");
});
