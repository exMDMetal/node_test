var mongoose = require('libs/mongoose');

var Schema = mongoose.Schema;

var Place = new Schema({
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coordinates: {
        type: String,
        required: true
    }
});

Place.path('title').validate(function(value){
    return value > 5 && value < 50;
});

module.exports = mongoose.model('Place', Place);