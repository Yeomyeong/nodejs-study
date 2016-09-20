var fs = require('fs');

fs.readFile('textfile.txt', 'utf8', function(error, data){
  if (error) {
    return console.log(error);
  }
  console.log(data);

});

fs.writeFile('textfile.txt', 'Hello, Universe, Hi Baby','utf8', function(error){
  if (error) {
    return console.log(error);
  }
  console.log('WRITE FILE COMPLETE');
});
