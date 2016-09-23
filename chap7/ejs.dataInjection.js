var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, resp){
  fs.readFile('ejsMyPage.ejs', 'utf8', function(error, data){
    resp.writeHead(200, {'Content-Type' : 'text/html'});
    resp.end(ejs.render(data, {
      name : 'reimaginer',
      blog : 'http://reimaginer.tistory.com',
      job : 'software engineer',
      desc : 'I hope there is peace all over the world.'
    }));
  });
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273')
});
