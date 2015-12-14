'use strict';

angular.module('tictactoeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tictactoe', {
        url: '/tictactoe',
        templateUrl: 'app/tictactoeController/tictactoe.html',
        controller: 'TictactoeController'
      });
  });
