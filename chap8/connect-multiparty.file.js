var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

var app = express();


app.use(multipart({uploadDir : __dirname + '/upload'}));

app.get('/', function(request, response){
  fs.readFile('fileupload.html', function(error, data) {
    response.send(data.toString());
  });
});

app.post('/', function(request, response){
  console.log(request.body);
  console.log(request.files);

  var prefix = request.body.prefix;
  var imageFile = request.files.image;

  if (imageFile) {
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;

    if (type.indexOf('image') > -1) {
      var outputPath = __dirname + '/upload/' + prefix +Date.now() + '_' + name;
      fs.rename(path, outputPath, function(error) {
        console.log(error);
        response.redirect('/');
      })
    } else {
      fs.unlink(path, function(error) {
        response.sendStatus(400);
      });
    }
  } else {
    response.sendStatus(400);
  }
});

app.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});
