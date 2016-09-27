var express = require('express');

var app = express();

app.use(function(req, resp) {
  resp.status(404).send('<h1>Hello Error</h1>I am reimaginer.')
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
