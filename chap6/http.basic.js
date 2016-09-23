var http = require('http');
var server = http.createServer(function(req, resp){
  resp.writeHead(200, {'Content-Type' : 'text/html'});
  resp.end('<h1>Hello Web Server with node.js</h1>');
});

server.on('connection', function(code) {
  console.log('Connection On : ' + code);
});

server.on('close', function(code) {
  console.log('Close On : ' + code);
});

server.listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273')
});
