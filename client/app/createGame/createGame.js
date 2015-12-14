'use strict';

angular.module('tictactoeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/',
        templateUrl: 'app/createGame/createGame.html',
        controller: 'CreateGameCtrl'
      });
  });
