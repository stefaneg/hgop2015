var _ = require('lodash');
module.exports = function tictactoeCommandHandler(events) {
  var gameState = {
    gameCreatedEvent : events[0],
    board: [['','',''],['','',''],['','','']]
  };

  var eventHandlers={
    'MoveMade': function(event){
      gameState.board[event.x][event.y] = event.side;
    }
  };

  _.each(events, function(event){
    var eventHandler = eventHandlers[event.event];
    if(eventHandler) eventHandler(event);
  });

  var handlers = {
    "CreateGame": function (cmd) {
      {
        return [{
          id: cmd.id,
          gameId: cmd.gameId,
          event: "GameCreated",
          user: cmd.user,
          timeStamp: cmd.timeStamp,
          name: cmd.name

        }];
      }
    },
    "JoinGame": function (cmd) {
      {
        if (gameState.gameCreatedEvent === undefined) {
          return [{
            id: cmd.id,
            event: "GameDoesNotExist",
            user: cmd.user,
            timeStamp: cmd.timeStamp
          }];
        }
        return [{
          id: cmd.id,
          event: "GameJoined",
          user: cmd.user,
          timeStamp: cmd.timeStamp
        }];
      }
    },
    "MakeMove": function(cmd){
      if(gameState.board[cmd.x][cmd.y]!==''){
        return [{
          id: cmd.id,
          event: "IllegalMove",
          user: cmd.user,
          name:gameState.gameCreatedEvent.name,
          x:cmd.x,
          y:cmd.y,
          side:cmd.side,
          timeStamp: cmd.timeStamp
        }]
      }
      return [{
        id: cmd.id,
        event: "MoveMade",
        user: cmd.user,
        name:gameState.gameCreatedEvent.name,
        x:cmd.x,
        y:cmd.y,
        side:cmd.side,
        timeStamp: cmd.timeStamp
      }]
    }
  };

  return {
    executeCommand: function (cmd) {
      var handler = handlers[cmd.comm];
      if(!handler){
        throw new Error("No handler resolved for command " + JSON.stringify(cmd));
      }
      return handler(cmd);
    }
  };
};
