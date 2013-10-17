var mongoose = require('mongoose');
var config = require('config');
var logger = require('./logger')(module);

var db = mongoose.connection;
db.on('open', function(){
    logger.info('MongoDB started on uri: ' + config.get('mongoose:uri'));
});
db.on('error', function(error){
    logger.error('Failed to connect');
});

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;