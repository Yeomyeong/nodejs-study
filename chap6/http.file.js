var fs = require('fs');
var http = require('http');

http.createServer(function(req, resp) {
  fs.readFile('sample-image.jpg', function(error, data){
    resp.writeHead(200, {'Content-Type' : 'image/jpeg'});
    resp.end(data);
  });
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});

http.createServer(function(req, resp) {
  fs.readFile('sample-mp3.mp3', function(error, data){
    resp.writeHead(200, {'Content-Type' : 'audio/mp3'});
    resp.end(data);
  })
}).listen(52274, function(){
  console.log('Server Running at http://127.0.0.1:52274');
});
