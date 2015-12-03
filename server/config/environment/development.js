'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/tictactoe-dev'
  },
  eventstore:'/eventstore/memorystore/memorystore',
  seedDB: true
};
