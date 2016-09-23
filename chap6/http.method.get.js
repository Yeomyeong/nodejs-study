var http = require('http');
var url = require('url');

http.createServer(function(req, resp){
  var title = req.method + ' REQUEST';
  var query = url.parse(req.url, true).query;

  console.log(title);
  resp.writeHead(200, {'Content-Type' : 'text/html'});
  resp.end(
    '<h1>' + title + '</h1>'
    + '<hr> query : ' + JSON.stringify(query)
  );

}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273')
});
