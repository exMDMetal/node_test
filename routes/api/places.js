//GET
exports.getTypes = function(req, res){
    var testData = require('tests/places');
    res.send(testData);
}

exports.getCategory = function(req, res){
    var testData = require('tests/places');
    res.send(testData[req.params.type]);
}

exports.getCurrentCategory = function(req, res){
    var testData = require('tests/places');
    res.send(testData[req.params.type][req.params.category]);
}

exports.getPlace = function(req, res){
    var testData = require('tests/places');
    res.send(testData[req.params.type][req.params.category][req.params.place]);
}


//POST
exports.createType = function(req, res){
    res.send('API is not ready');
}

exports.createCategory = function(req, res){
    res.send('API is not ready');
}

exports.createPlace = function(req, res){
    res.send('API is not ready');
}


//PUT
exports.editPlace = function(req, res){
    res.send('API is not ready');
}


//DELETE
exports.deleteType = function(req, res){
    res.send('API is not ready');
}

exports.deleteCategory = function(req, res){
    res.send('API is not ready');
}

exports.deletePlace = function(req, res){
    res.send('API is not ready');
}