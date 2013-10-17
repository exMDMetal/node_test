var mongoose = require('libs/mongoose');

var Schema = mongoose.Schema;

var User = new Schema({

});

module.exports = mongoose.model('Guide', User);