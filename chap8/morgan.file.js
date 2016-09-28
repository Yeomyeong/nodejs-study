var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// setup the logger
app.use(morgan('combined', {
  stream : accessLogStream ,
  skip: function (req, res) { return res.statusCode > 400 }
}));

app.use('/index' ,function(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.end('<h1>Hello express</h1>express basic')
});

app.all('*', function(request, response){
  response.status(404).send('<h1>ERROR - page not found</h1>');
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
