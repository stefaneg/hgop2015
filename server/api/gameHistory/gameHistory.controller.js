'use strict';

var _ = require('lodash');

var app = require('../../app');

// gameHistory
module.exports = function (eventStore) {
  return {
    index: function (req, res) {
      eventStore.loadEvents(req.params.gameId).then(function (events) {
        res.json(events);
      }, function (err) {
        res.json(err);
      });
    }
  }
};
