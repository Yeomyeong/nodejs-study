var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
  if (request.cookies.auth) {
    response.send('<h1>Login Success</h1>');
  } else {
    response.redirect('/login');
  }
});

app.get('/login', function(request, response){
  fs.readFile('login.html', function(error, data) {
    response.send(data.toString());
  });
});

app.post('/login', function(request, response){
  var username = request.body.username;
  var password = request.body.password;

  if(username == 'rint' && password == '1234' ) {
    console.log(username + ' 로그인 성공');
    response.cookie('auth', true);
    response.redirect('/');
  } else {
    console.log('로그인 실패 : ' + username + '/' + password);
    response.redirect('/login');
  }
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
