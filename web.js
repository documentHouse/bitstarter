var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('What\'s up' );
});

app.get('/message', function(request, response) {
  response.send('This is my message' );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
