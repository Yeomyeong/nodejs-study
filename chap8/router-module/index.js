var express = require('express');

var app = express();

app.use('/index', require("./routerA").router);
app.use('/index', require("./routerB").router);

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
