var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  if (request.method == 'GET') {
    var urlObj = url.parse(request.url, true);
    var requestUrl = urlObj.pathname;
    var queryString = urlObj.query.iso;
    var date = new Date(queryString);

    response.writeHead(200, { 'Content-Type': 'application/json' })

    if (requestUrl == '/api/parsetime') {
      var jsonObj = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};

      response.end(JSON.stringify(jsonObj));
    } else if (requestUrl == '/api/unixtime') {
      var jsonObj = {unixtime: date.getTime()};

      response.end(JSON.stringify(jsonObj));
    } else {
      response.writeHead(404)
      response.end();
    }
  }
});

server.listen(Number(process.argv[2]));
