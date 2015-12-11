HGOP Project Template (TicTacToe) 
=========

Getting started with this project template. After this you should have the project up-and-running on your
development virtual machine.

#### Project fixes & step-by-step instructions
[Vagrant SSH Solution](./hgop-docs/vagrant-ssh-problem.md)

[NPM install errors](./hgop-docs/npm-install-errors.md)

[Installing and configuring Jenkins](./hgop-docs/jenkins-ci.md)

### Thursday 26.11

#### Project increments, day by day
[Day 1 - getting started](./hgop-docs/day1.md)

[Day 2 - deployment script](./hgop-docs/day2.md)

[Day 3 - continuous integration](./hgop-docs/day3.md)

[Day 4 - gather examples](./hgop-docs/day4.md)

[Day 5 - implement game logic](./hgop-docs/day5.md)

[Day 6 - integrate REST server](./hgop-docs/day6.md)

[Day 7 - acceptance testing 1](./hgop-docs/day7.md)

[Day 8 - acceptance testing 2](./hgop-docs/day8.md)

[Day 9 - capacity load testing](./hgop-docs/day9.md)

[Day 10 - traceability and deploy any version](./hgop-docs/day10.md)

[Day 11 - integrate client and client smoke test](./hgop-docs/day11.md)

### Project backlog

*	Can update latest version in production by push of a button
  
* Can get feedback on failed tests in CI
 
*	Can play tic-tac-toe against another user
 Implement using TDD
 Controller TDD
 Acceptance TDD
 Server side, API TDD
 Client TDD (React demo)
 
*	Can get an email when I win a match

 Implement an acceptance test, using test double to simulate email sending

*	Can see how many users played Tic-Tac-Toe in a given period

 Metrics and monitoring

*	Can know how many users our application supports on given hardware

 Automated capacity testing

*	Can be sure that latest version in production supports happy path after upgrade

 Acceptance test through UI
 Acceptance test through API

*	Can be sure that deployment is not continued if key resources are missing
  Env smoke tests
  Auto rollback

*	Can be sure that deployment is not continued if configuration parameter is not set
  Env smoke tests - use simple wget/curl/similar.
  
*	Can continue playing even if the whole world is playing back games
  CQRS - separate deployment for playback

*	Can downgrade to selected version by push of a button
 Implement rollback, including down migrations (demo)

*	Can playback old games after data structure has changed
 Database migration (demo)


*	Can update to latest version with zero downtime
  Blue/Green deployment and testing ?

*	Can play-back any given game to see how it was played
 Use event sourcing - record every user interaction

* Can trace binary back to version control.
 Store git hash for commit and package in build.
