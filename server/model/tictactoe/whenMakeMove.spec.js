var tictactoeCommandHandler = require('./tictactoeCommandHandler');

describe('when make move command', function(){

  var given, when, then;

  beforeEach(function(){
    given= [{
      id:"1234",
      event:"GameCreated",
      name:"TheFirstGame",
      user : {
        userName:'Gulli',
        side: 'X'
      },
      timeStamp: "2015.12.02T11:29:44"
    }, {
      id:"12345",
      event:"GameJoined",
      user : {
        userName:'Halli',
        side: 'O'
      },
      timeStamp: "2015.12.02T11:30:50"
    }];
  });

  describe('on new game', function(){
    it('should join game',function(){
      when={
        id:"12345",
        comm:"MakeMove",
        user:{
          userName : "Halli",
          side:'X'
        },
        x:0,
        y:1,
        timeStamp: "2015.12.02T11:30:50"
      };
      then=[{
        id:"12345",
        event:"MoveMade",
        user:{
          userName:"Halli",
          side:'X'
        },
        name:"TheFirstGame",
        x:0,
        y:1,
        timeStamp: "2015.12.02T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });

  describe("one previous move", function(){
    it('placing move in same place should be illegal',function(){
      given.push({
        id:"12345",
        event:"MoveMade",
        user:{
          userName:"Halli",
          side:'X'
        },
        name:"TheFirstGame",
        x:0,
        y:1,
        timeStamp: "2015.12.02T11:30:50"
      });

      when={
        id:"12345",
        comm:"MakeMove",
        user:{
          userName:"Halli",
          side:'X'
        },
        x:0,
        y:1,
        timeStamp: "2015.12.02T11:30:50"
      };

      then=[{
        id:"12345",
        event:"IllegalMove",
        user:{
          userName:"Halli",
          side:'X'
        },
        name:"TheFirstGame",
        x:0,
        y:1,
        timeStamp: "2015.12.02T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));

    });
  });
});
