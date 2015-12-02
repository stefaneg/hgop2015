module.exports = function tictactoeCommandHandler(events) {
  var gameCreatedEvent = events[0];

  var handlers = {
    "CreateGame": function (cmd) {
      {
        return [{
          id: cmd.id,
          event: "GameCreated",
          userName: cmd.userName,
          timeStamp: cmd.timeStamp
        }];
      }
    },
    "JoinGame": function (cmd) {
      {
        if (gameCreatedEvent === undefined) {
          return [{
            id: cmd.id,
            event: "GameDoesNotExist",
            userName: cmd.userName,
            timeStamp: cmd.timeStamp
          }];
        }
        return [{
          id: cmd.id,
          event: "GameJoined",
          userName: cmd.userName,
          otherUserName: gameCreatedEvent.userName,
          timeStamp: cmd.timeStamp
        }];
      }
    }
  };

  return {
    executeCommand: function (cmd) {
      return handlers[cmd.comm](cmd);
    }
  };
};
