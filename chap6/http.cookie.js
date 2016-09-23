var http = require('http');

http.createServer(function(req, resp) {
  var date = new Date();
  date.setDate(date.getDate() + 7);

  resp.writeHead(200, {
    'Content-Type' : 'text/html',
    'Set-Cookie' : [
      'breakfast = toast;Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]
  });
  resp.end('<h1>'+ req.headers.cookie+'</h1>')
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
