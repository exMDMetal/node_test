var express  = require('express');
var http     = require('http');
var path     = require('path');
var config   = require('config');
var logger   = require('libs/logger')(module);

var app = express();

http.createServer(app).listen(config.get('domain:port'), config.get('domain:host'), function(){
    logger.info('Server started. Host: ' + config.get('domain:port') + '/ Port: ' + config.get('domain:port'));
});