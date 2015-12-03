/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app, config) {

  var eventStore = require('.' + config.eventstore)();

  // Insert routes below
  app.get("/api/testApi", function(req, res){
    res.json({"test":"test"});
  });

  app.use('/api/gameHistory', require('./api/gameHistory')(eventStore).router);

  app.use('/api/joinGame', require('./api/joinGame')(eventStore).router);
  app.use('/api/placeMove', require('./api/placeMove')(eventStore).router);
  app.use('/api/createGame', require('./api/createGame')(eventStore).router);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
