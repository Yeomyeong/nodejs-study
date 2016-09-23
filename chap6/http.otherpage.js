var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, resp){
  var pathname = url.parse(req.url).pathname.replace(/^[/]/, '');

  var filename = 'index.html';
  if(pathname)
    filename = pathname + '.html';

  fs.readFile(filename, function(error, data){
    if (error){
      resp.writeHead(404, {'Content-Type' : 'text/html'});
      resp.end('<h1>404, not found</h1>');
    }
    resp.writeHead(200, {'Content-Type' : 'text/html'});
    resp.end(data);
  });
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273')
});
