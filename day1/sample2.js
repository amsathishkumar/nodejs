console.log("Calc");
var a = require ("fs");


a.readFile('sat.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString('utf8'));
});