var fs = require('fs');

var data = 'Hello World, Hello Universe.';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(error){
  console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
