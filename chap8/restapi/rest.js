var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');


var DummyDB = (function(){
  var DummyDB = {};
  var storage = {};
  var uniqueKey = 1;

  DummyDB.get = function(id) {
    if(id) {
      id = toNumber(id);
      for (var i in storage){
        if (storage[i].id == id)
          return storage[i];
      }
    } else {
      return storage;
    }
  }

  DummyDB.insert = function(data) {
    data.id = uniqueKey++;
    storage.push(data);
    return data;
  }

  DummyDB.remove = function(id) {
    id = toNumber(id);

    for (var i in storage){
      if (storage[i].id == id) {
        storage.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  function toNumber(str) {
    return (typeof id == 'string') ? Number(id) : id;
  }

  return DummyDB;

})();

var app = express();

app.use(bodyParser.urlencoded({
  extended : false
}));

app.get('/user', function(request, response){
  response.send(DummyDB.get());
});
app.get('/user/:id', function(request, response){
  response.send(DummyDB.get(request.params.id));
});
app.post('/user', function(request, response){
  var name = request.body.name;
  var region = request.body.region;

  if(name && region) {
    response.send(DummyDB.insert({
      name : name,
      region : region
    }));
  } else {
    throw new Error('error');
  }
});
app.put('/user/:id', function(request, response){
  var id = request.params.id;
  var name = request.body.name;
  var region = request.body.region;

  var item = DummyDB.get(id);
  item.name = name || item.name;
  item.region = region || item.region;

  response.send(item);
});
app.delete('/user/:id', function(request, response){
  response.send(DummyDB.remove(request.params.id));
});

app.listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
})
