var onUncaughtException = function (error) {
  console.log('예외는 한번만 봐준다. -_-;;');

  process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

var count = 0;
var test = function() {
  setTimeout(test, 2000);
  error.error.error();;
};
setTimeout(test, 2000);
