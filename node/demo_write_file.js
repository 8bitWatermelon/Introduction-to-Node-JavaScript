const fileStream = require("fs");

const fileName = "mynewfile3.txt";
let message = "Hello world to Writing a file with writeFile() method!";

fileStream.appendFile(fileName, message, function (err) {
	if (err) throw err;
	console.log("Content Has Been Replaced!");
});
