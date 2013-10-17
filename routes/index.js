var logger = require('libs/logger')(module);

//require API
var places = require('./api/places');
var guides = require('./api/guides');

function setRoutes(app){
    //API
    //places
    app.get('/api/type', places.getTypes); //Get all types
    app.get('/api/type/:type', places.getCategory); //Get all category
    app.get('/api/type/:type/:category', places.getCurrentCategory); //Get all places in current category
    app.get('/api/type/:type/:category/:place', places.getPlace); //Get current place

    app.post('/api/:type', places.createType); //Create new type
    app.post('/api/:type/:category', places.createCategory); //Create new category
    app.post('/api/:type/:category/:place', places.createPlace); //Create new place

    app.put('/api/:type/:category/:place', places.editPlace); //Edit current place

    app.delete('/api/:type', places.deleteType); //Delete current type
    app.delete('/api/:type/:category', places.deleteCategory); //Delete current category
    app.delete('/api/:type/:category/:place', places.deleteCategory); //Delete current place

    //guides
    app.get('/api/guides');
    app.get('/api/guides/:id');

    app.post('/api/guides/:id');

    app.put('/api/guides/:id');

    app.delete('/api/guides/:id');


    //Errors handlers
    app.use(function(req, res, next){
        res.status(404);
        if(app.get('env') == 'development') logger.debug('Not found URL: %s',req.url);
        res.send('Not found');
        return;
    });

    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        logger.error('Internal error(%d): %s', res.statusCode, err.message);
        res.send('Server error');
        return;
    });
}

module.exports = setRoutes;