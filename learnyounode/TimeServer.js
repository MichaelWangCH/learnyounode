var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var dateString = strftime('%F %R', new Date());
  socket.write(dateString + '\n');
  socket.end();
});

server.listen(Number(process.argv[2]));
