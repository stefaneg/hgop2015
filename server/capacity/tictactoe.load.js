var user = require('../fluid-api/tictactoeFluid').user;
var given = require('../fluid-api/tictactoeFluid').given;

it('Should play 1000 games in x seconds.', function (done) {
  var doneCount = 0;
  var gamesToPlay = 1000;
  var x = 6;

  this.timeout(x * 1000);

  var QED = function () {
    if (gamesToPlay === ++doneCount) {
      done();
    }
  };

  for (var gameId = 0; gameId < gamesToPlay; gameId++) {
    /*
    given(user("TestUserOne").createsGame("" + gameId))

      ...play game to end...

      .expect("GameCreated").isOk(QED);
    */
  }
});
