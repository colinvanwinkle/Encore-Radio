var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

res.writeHead(200, {'Content-Type': 'text/html'});
var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
readStream.pipe(res);
});


server.listen(80, '138.197.215.196');
