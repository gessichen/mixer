var express =  require("express");
var http = require('http');
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "Public")));

var server = app.listen(8080);
console.log('Server listening on port 8080');
  


