var express = require('express');

var app = express();

app.use(function(req, resp) {
  var firstname = req.query.firstname;
  var lastname = req.query.lastname;

  resp.send(
    '<h1>hello' + ' '+ firstname + ' '+ lastname + '</h1>'
    + '<a href="/?firstname=yeomyeong&lastname=woo">link</a>'
  );
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
