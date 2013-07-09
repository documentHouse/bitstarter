var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexBuffer = fs.readFileSync('index.html');
  response.send(indexBuffer.toString());
});

app.get('/message', function(request, response) {
  response.send('This is my message' );
});

app.get('/info', function(request, response) {
  response.send('<html><head></head><body><h1>Bold, but no info</h1></body></html>' );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
