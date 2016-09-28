//routerB.js 파일
var express = require('express');
var router = express.Router();

router.get('/b', function(request, response) {
  response.send('<a href="/a">Go to A</a>');
});

exports.router = router;
