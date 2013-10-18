var mongoose = require('libs/mongoose');

var Schema = mongoose.Schema;

var Guide = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

Guide.path('name').validate(function(value){
    return value > 5 && value < 50;
});

module.exports = mongoose.model('Guide', Guide);