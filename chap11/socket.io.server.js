var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(request, response) {
  fs.readFile('basic.html', function(error, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}).listen(52273, function() {
  console.log('Server running at http://127.0.0.1:52273');
});

var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
  id = socket.id;
  socket.on('rint', function(data) {
    console.log('Client Send Data:' , data);

    socket.emit('smart', data);

    //퍼블릭 통신
    //io.socket.emit('smart', data);

    //broadcast 통신
    //socket.broadcast.emit('smart', data);

    //private 통신
    //io.socket.to(id).emit('smart', data);
  });
});
