var http = require('http');

http.createServer(function(req, resp) {
  var date = new Date();
  date.setDate(date.getDate() + 7);

  if (req.headers.cookie) {
    var cookie = req.headers.cookie.split(';').map(function(element){
      var pair = element.split('=');
      return {
        key : pair[0],
        value : pair[1]
      }
    });
    resp.end('<h1>'+ JSON.stringify(cookie) +'</h1>');
  } else {
    resp.writeHead(200, {
      'Content-Type' : 'text/html',
      'Set-Cookie' : [
        'breakfast = toast;Expires = ' + date.toUTCString(),
        'dinner = chicken'
      ]
    });
    resp.end('<h1>쿠키를 생성했습니다.</h1>');
  }
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
