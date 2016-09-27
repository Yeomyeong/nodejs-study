var http = require('http');
var express = require('express');

var app = express();

app.use(function(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.end('<h1>Hello express</h1>express basic2')
});

http.createServer(app).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
