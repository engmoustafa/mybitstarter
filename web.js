var express = require('express');
var http = require('http');
var fileSystem = require('fs');
var path = require('path');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello World\n');
  var filePath = "index.html";
  var readStream = fileSystem.createReadStream(filePath);  
  readStream.pipe(response);  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
