var express  = require('express');
var http     = require('http');
var path     = require('path');
var config   = require('config');

var app = express();

http.createServer(app).listen(config.get('domain:port'), config.get('domain:host'));