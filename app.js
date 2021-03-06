var express   = require('express');
var http      = require('http');
var mongoose  = require('libs/mongoose');
var path      = require('path');
var config    = require('config');
var logger    = require('libs/logger')(module);

var app = express();

app.use(express.favicon(path.join(__dirname, '/static/image/favicon.ico')));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/static')));

if (app.get('env') == 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}

require('routes')(app);

http.createServer(app).listen(config.get('domain:port'), config.get('domain:host'), function(){
    logger.info('Server started. Host: ' + config.get('domain:host') + '/ Port: ' + config.get('domain:port'));
});