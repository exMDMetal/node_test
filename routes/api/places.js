//GET
exports.getTypes = function(req, res){
    res.send('Get all types');
}

exports.getCategory = function(req, res){
    res.send('Get all category in current type');
}

exports.getCurrentCategory = function(req, res){
    res.send('Get all places in current category');
}

exports.getPlace = function(req, res){
    res.send('Get current place');
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


//DEL
exports.deleteType = function(req, res){
    res.send('API is not ready');
}

exports.deleteCategory = function(req, res){
    res.send('API is not ready');
}

exports.deletePlace = function(req, res){
    res.send('API is not ready');
}