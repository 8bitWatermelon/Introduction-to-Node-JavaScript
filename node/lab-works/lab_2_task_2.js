const fileStream = require("fs");

let message =
	"Enoabasi Essien    Maaz\n" +
	"CSCI321 Project    CSIT242 Mobile Application Development\n" +
	"CSIT356 Game Engine Essentials     CSIT226 Human Computer Interaction\n" +
	"CSIT242 Mobile Application Development     CSIT203 DataStructures and Algorithms";

fileStream.appendFile("mySubjects.txt", message, function (err) {
	if (err) throw err;
	console.log("File saved!");
});
