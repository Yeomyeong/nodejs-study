var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan(':method + :date'));

app.use('/index' ,function(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.end('<h1>Hello express</h1>express basic')
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
