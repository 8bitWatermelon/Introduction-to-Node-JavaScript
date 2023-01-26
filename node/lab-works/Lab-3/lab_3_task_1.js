let url = require("url");

let labUrl =
	"http://localhost:8080/default.htm?studentid=123456&studentname=StudentX";

let q = url.parse(labUrl, true);
let qObject = q.query;

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(qObject.studentname);
console.log(qObject.studentid);
