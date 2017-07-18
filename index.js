var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);

var io = require('socket.io').listen(http);
var path = require('path');
// const angular = require('angular.js');

// var hostname =

const hostname = '0.0.0.0';
// const port = 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){


  res.sendFile(__dirname + '/index.html');
  // res.statusCode = 200;
});


io.sockets.on('connection', function (socket) {
   console.log('user connected');

});



http.listen(3000,'0.0.0.0', function(){
  console.log('Server running at port 3000');
});
http.listen(80);
