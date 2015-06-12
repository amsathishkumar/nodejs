var http = require('http');
var url = require('url');
var qs = require('querystring');
var calc = require('./sample1');

var server = http.createServer(function(req, res){
    console.log('A new connection is established'+req.url);
    	
    var sQuery = url.parse(req.url);
    console.log("url"+sQuery.query);
	console.log("operation sString",qs.parse(sQuery.query)['operation']);
    
    console.log("n1 sString",qs.parse(sQuery.query)['n1']);
    console.log("n2 sString",qs.parse(sQuery.query)['n2']);
    
    calc.add(parseInt(qs.parse(sQuery.query)['n1']),parseInt(qs.parse(sQuery.query)['n2']))
    console.log("Results", calc.getResults())
    
    res.statusCode=200;
    res.end();
});
server.listen(8080);
console.log("Server listening on port 8080!");