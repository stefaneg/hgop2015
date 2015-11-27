HGOP Project Template (TicTacToe) 
=========

Getting started with this project template. After this you should have the project up-and-running on your
development virtual machine.

#### CentOs VM access problem:
[Vagrant SSH Solution](./hgop-docs/vagrant-ssh-problem.md)

#### Project fixes
[NPM install errors](./hgop-docs/npm-install-errors.md)

### Thursday 26.11

#### Project increments, day by day
[Day 1](./hgop-docs/day1.md)
[Day 2](./hgop-docs/day2.md)

### Project backlog

*	Can update latest version in production by push of a button
  
  Including changes to data structure.

* Can get feedback on failing tests and diagnostics

  Commit stage / continuous integration.

*	Can play tic-tac-toe against another user

 Implement using TDD
 Acceptance TDD
 Controller TDD
 DOM - TicTacToe directive with TDD
 Server side, API TDD

*	Can play-back any given game to see how it was played

 Use event sourcing - record every user interaction

*	Can get an email when I win a match

 Implement an acceptance test, using test double to simulate email sending

*	Can downgrade to selected version by push of a button

 Implement rollback, including down migrations

*	Can playback old games after data structure has changed

 Database migration

*	Can see how many users played Tic-Tac-Toe in a given period

 Metrics and monitoring

*	Can know how many users our application supports on given hardware

 Automated capacity testing

*	Can be sure that latest version in production supports happy path after upgrade

 Acceptance test through UI
 Acceptance test through API

*	Can update to latest version with zero downtime

  Blue/Green deployment and testing

*	Can be sure that deployment is not continued if key resources are missing

  Env smoke tests
  Auto rollback

*	Can be sure that deployment is not continued if configuration parameter is not set

  Env smoke tests
  Auto rollback

*	Can continue playing even if the whole world is playing back games

  CQRS - separate deployment for playback
