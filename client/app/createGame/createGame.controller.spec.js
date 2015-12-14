'use strict';

describe('Controller: CreateGameCtrl', function () {

  // load the controller's module
  beforeEach(module('tictactoeApp'));

  var CreateGameCtrl, scope, httpBackend, location;

  beforeEach(function () {
    module(function ($provide) {
      var guids=['98765', '12345'];

      $provide.value('guid', function () {
        return guids.pop();
      });
    });

  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $location) {
    httpBackend = $httpBackend;
    location = $location;
    scope = $rootScope.$new();
    CreateGameCtrl = $controller('CreateGameCtrl', {
      $scope: scope
    });
  }));


  it('should post variables from scope for guid, name and userName and process resulting events, and assign me to X', function () {
    httpBackend.expectPOST('/api/createGame/', {
      id: '12345',
      gameId: '98765',
      comm: 'CreateGame',
      user: {
        userName: 'Gummi',
        side: 'X'
      },
      name: 'TheSecondGame',
      timeStamp: '2014-12-02T11:29:29'
    }).respond([
        {
          id: '12345',
          gameId: '98765',
          event: 'GameCreated',
          user: {
            userName: 'Gummi',
            side: 'X'
          }
        }
      ]
    );

    scope.name = 'TheSecondGame';

    scope.userName = 'Gummi';

    scope.createGame();
    httpBackend.flush();

    expect(location.search().gameId).toBe('98765');
    expect(location.search().gameSide).toBe('X');
    expect(location.path()).toBe('/tictactoe');

  });
});
