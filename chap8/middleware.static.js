var express = require('express');

var app = express();

app.use(express.static(__dirname + '/image'));

app.use(function(request, response) {
  response.send(
    '<h1>Image</h1>'+
    '<img src="/sample-image.jpg" width="100%">'
  );
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
