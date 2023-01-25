const fs = require("fs");

let readStream = fs.createReadStream("./demoFile.txt");

readStream.on("open", () => {
	console.log("File has been opened!");
});
