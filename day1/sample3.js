var http = require('http');
var path = require('path')
var a = require ("fs");



var server = http.createServer(function(req, res){
    console.log('A new connection is established'+req.url);
    var cpath= path.join(__dirname,"sat.txt")
    
    a.readFile(cpath, function (err, data) {
  if (err) throw err;
  res.write(data);
});
	res.write("{Name:sathish}"+cpath);
    res.end();
});
server.listen(8080);
console.log("Server listening on port 8080!");