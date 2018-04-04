'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
//var app = require('./app');
var path = require('path');
var express = require('express');

var app = express();

//var staticPath = path.join(__dirname, '/public');

app.use(express.static('public'));
app.use(express.static('src/Views'));

app.get('/',
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('index.html');
        //res.sendFile(__dirname + 'index.html');
        //res.write('test');
    });
app.listen(process.env.PORT||3000, function () {
    console.log('listening');
});
//http.createServer(app.handleRequest).listen(port);
//http.createServer(function (req, res) {
//    app.handleRequest();
//}).listen(port);
