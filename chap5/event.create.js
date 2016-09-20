var custom = new process.EventEmitter();

custom.on('tick', function (code){
  console.log('tick 이벤트가 발생했습니다.');
});

 custom.emit('tick');

custom.emit('tick');

custom.emit('tick');
