function setRoutes(app){

    //Errors handlers
    app.use(function(req, res, next){
        res.status(404);
        if(develop_mod) logger.debug('Not found URL: %s',req.url);
        res.send({ error: 'Not found' });
        return;
    });

    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        log.error('Internal error(%d): %s', res.statusCode, err.message);
        res.send('Server error');
        return;
    });
}

module.exports = setRoutes;