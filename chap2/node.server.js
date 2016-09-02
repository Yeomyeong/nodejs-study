var http = require('http');

http.createServer(function(request, response) {
  var ip = request.headers['x-forwarded-for'] ||
     request.connection.remoteAddress ||
     request.socket.remoteAddress ||
     request.connection.socket.remoteAddress;

  console.log(ip + ' access!');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World...!</h1>');
}).listen(52273, function() {
  console.log('Server running at http://127.0.0.1:52273');
});
