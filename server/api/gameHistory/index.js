'use strict';

var express = require('express');

var router = express.Router();


module.exports = function(eventStore){
  var controller = require('./gameHistory.controller')(eventStore);

  router.get('/:gameId', controller.index);

  return {
    router: router
  }
};
