'use strict';

angular.module('tictactoeApp')
  .factory('gameState', function () {
    return function () {

      var gameState = {
        created: false,
        board: [['', '', ''], ['', '', ''], ['', '', '']],
        nextTurn: 'X',
        gameDraw: false,
        winner: undefined,
        mutate: function (events) {
          var handlers = {
            'GameCreated': function (event, gameState) {
              gameState.created = true;
              gameState.name = event.name;
              gameState.gameId = event.gameId;
              gameState.creatingUser = event.user;
            },
            'GameJoined': function (event, gameState) {
              gameState.joiningUser = event.user;
            },
            'MovePlaced': function (event, gameState) {
              var x = event.move.xy.x, y = event.move.xy.y;
              gameState.board[x][y] = event.move.side;
              gameState.nextTurn = event.move.side === 'X' ? 'O' : 'X';
            },
            'GameWon': function (event, gameState) {
              gameState.nextTurn = 'GameOver';
              gameState.winner = event.user;
            },
            'GameDraw': function (event, gameState) {
              gameState.nextTurn = 'GameOver';
              gameState.gameDraw = true;
            }
          };
          console.debug("Mutating with events", events);
          _.each(events, function (ev) {
            if(!ev) {
              return;
            }
            if(handlers[ev.event]){
              handlers[ev.event](ev, gameState);
            }
          });
        }
      };
      return gameState;
    };
  });
