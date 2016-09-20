var rint = require('./rint');

var count = 0;
rint.timer.on('tick', function(code) {
  count++;
  console.log('tick 이벤트가 '+count+'번 발생했습니다.');
});
