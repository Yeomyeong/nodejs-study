//routerA.js 파일
var express = require('express');
var router = express.Router();

router.get('/a', function(request, response) {
  response.send('<a href="b">Go to B</a>');
});

exports.router = router;
