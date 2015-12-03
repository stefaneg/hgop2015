'use strict';

var express = require('express');

module.exports = function(eventStore){


  var router = express.Router();

  var controller = require('../command.controller')(eventStore);
  router.post('/', controller.executeCommand);

  return {
    router:router
  }

};
