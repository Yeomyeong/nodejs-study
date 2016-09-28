var express = require('express');

var app = express();

app.get('/a', function(request, response) {
  response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function(request, response) {
  response.send('<a href="/a">Go to A</a>');
});

app.get('/page/:id', function(request, response) {
  var pageId = parseInt(request.params.id);
  response.send(
    '<h1>'+pageId+'페이지 </h1>'
    + '<a href="/page/'+(pageId+1)+'">next</a>'
  );
});

app.all('*', function(request, response){
  response.status(404).send('<h1>ERROR - page not found</h1>');
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
