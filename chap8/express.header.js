var express = require('express');

var app = express();

app.use(function(req, resp) {
  var agent = req.header("User-Agent");
  console.log(req.headers);
  console.log(agent);

  if(agent.toLowerCase().match(/chrome/)) {
    resp.send("<h1>Hello Chrome</h1>I am reimaginer.")
  } else {
    resp.send("<h1>Hello Browser</h1>I am reimaginer.")
  }

});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
