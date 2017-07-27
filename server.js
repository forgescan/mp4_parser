var http = require('http');
var express = require('express');
var app = express();
var port = process.env.port || 1337;
var server = require('http').Server(app);

server.listen(port);
app.use(express.static(__dirname + '/static'));

