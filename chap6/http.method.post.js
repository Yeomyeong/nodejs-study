var http = require('http');
var fs = require('fs');
var qs = require('querystring');

http.createServer(function(req, resp){
  if (req.method == 'GET') {
    fs.readFile('form.html', function(error, data) {
      resp.writeHead(200, {'Content-Type': 'text/html'});
      resp.end(data);
    });
  } else if (req.method == 'POST') {
    req.on('data', function (data) {
      var query = qs.parse(data.toString());
      resp.writeHead(200, {'Content-Type': 'text/html'});
      resp.end('<h1>' + JSON.stringify(query) + '</h1>' + data);
    });
  }
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273')
});
