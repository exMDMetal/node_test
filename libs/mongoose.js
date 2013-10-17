var mongoose = require('mongoose');
var config = require('config');
var logger = require('./logger')(module);

var db = mongoose.connection;
db.once('open', function(){
    logger.info('MongoDB started on uri: ' + config.get('mongoose:uri'));
});
db.on('error', function(){
    logger.error('Failed to connect');
});

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;