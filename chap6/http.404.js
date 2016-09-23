var http = require('http');

http.createServer(function(req, resp) {
  resp.writeHead(404);
  resp.end('<h1>404, not found</h1>');
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
