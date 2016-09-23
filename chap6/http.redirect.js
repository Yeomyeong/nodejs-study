var http = require('http');

http.createServer(function(req, resp) {
  resp.writeHead(302, { 'Location' : 'http://reimaginer.tistory.com'});
  resp.end();
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
