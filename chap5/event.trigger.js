process.on('exit', function(code){
  console.log('안녕히계세요 ㅠ_ㅠ;;');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중1');
process.exit(); //진짜 종료

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
console.log('프로그램 실행 중2');
