var fs = require('fs');

console.log("파일을 동기적으로 읽는다");
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

console.log("파일을 비동기적으로 읽는다");
fs.readFile('textfile.txt', 'utf8', function(error, data) {
  console.log(data);
});
