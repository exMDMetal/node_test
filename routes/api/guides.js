//GET
exports.getAll = function(req, res){
    var testData = require('tests/simulate_data/guides');
    res.send(testData);
}

exports.getCurrentGuide = function(req, res){
    var testData = require('tests/simulate_data/guides');
    res.send(testData[req.params.id]);
}

//POST
exports.createGuide = function(req, res){
    res.send('API is not ready');
}

//PUT
exports.editGuides = function(req, res){
    res.send('API is not ready');
}

//DELETE
exports.deleteGuide = function(req, res){
    res.send('API is not ready');
}