let url = require("url");

let webAddress =
	"http://localhost:8080/demofile1.html?year=2017&month=february";
let q = url.parse(webAddress, true);

console.log(q.host); // Returns the host port | name => 'localhost:8080'
console.log(q.pathname); // Returns the pathnmae of the page we are on '/demofile1.html'
console.log(q.search); // Returns the search Parameters of the url '?year=2017&month=february'

let qObject = q.query; // Transforming a parse url into an object.
console.log(qObject);
console.log(qObject.year);
console.log(qObject.month);
