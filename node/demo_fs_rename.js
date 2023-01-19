const fileStream = require("fs");

const oldFileName = "mynewfile3.txt";
const newFileName = "myrenamedfile.txt";

fileStream.rename(oldFileName, newFileName, function (err) {
	if (err) throw err;
	console.log(
		`File: ${oldFileName} has been renamed to ${newFileName} successfully!`
	);
});
