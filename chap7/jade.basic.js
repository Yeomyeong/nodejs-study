var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(req, resp){
  fs.readFile('jadePage.jade', 'utf8', function(error, data){
    var compile = jade.compile(data);

    resp.writeHead(200, {'Content-Type' : 'text/html'});
    resp.end(compile({
      name : 're-imaginer',
      desc : 'I hope there is peace in the world.'
    }));
  });
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273')
});
