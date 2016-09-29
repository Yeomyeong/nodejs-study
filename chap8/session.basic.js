var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret : 'secret key',
  resave : 'false',
  saveUninitialized : true,
  cookie : {
    maxAge : 60 * 1000
  }
}));

app.use(function(request, response) {
    console.log(request.query.name);
    request.session.name = request.query.name;

    response.send(request.session)
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
