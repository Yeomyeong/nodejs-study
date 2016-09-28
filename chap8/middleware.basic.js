var express = require('express');

var app = express();

app.use(function(request, response, next) {
  console.log("첫 번째 미들웨어");
  request.firstmiddle = "hello first middleware";
  next();
});

app.use(function(request, response, next) {
  console.log("두 번째 미들웨어");
  response.secondmiddle = "hello second middleware";
  next();
});

app.use(function(request, response, next) {
  console.log("세 번째 미들웨어");
  response.send(
    "<h1>Middleware basic</h1>"
    + 'request 속성 추가 : ' +request.firstmiddle + '<br>'
    + 'response 속성 추가 : '+response.secondmiddle + '<br>'
  )
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
