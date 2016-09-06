var url = require('url');
var queryString = require('querystring');

var parsedObject = url.parse('http://m.11st.co.kr/MW/api/app/elevenst/search/listing.tmall?searchKeyword=%25EB%2585%25B8%25ED%258A%25B8%25EB%25B6&dispCtgrNo=2&appVCA=720');
var qs = queryString.parse(parsedObject.query);

console.log(qs);
console.log(qs.appVCA);
