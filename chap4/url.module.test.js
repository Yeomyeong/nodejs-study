var url = require('url');

var parsedUrl1 = url.parse('http://m.11st.co.kr/MW/api/app/elevenst/search/listing.tmall?searchKeyword=%25EB%2585%25B8%25ED%258A%25B8%25EB%25B6&dispCtgrNo=2&appVCA=720');
console.log(parsedUrl1);

//쿼리스트링 까지 parse
var parsedUrl2 = url.parse('http://m.11st.co.kr/MW/api/app/elevenst/search/listing.tmall?searchKeyword=%25EB%2585%25B8%25ED%258A%25B8%25EB%25B6&dispCtgrNo=2&appVCA=720', true);
console.log(parsedUrl2.query);
