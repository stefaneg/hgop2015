HGOP Project Template (TicTacToe) 
=========

Getting started with this project template. After this you should have the project up-and-running on a Digital Ocean


### Thursday 26.11

INITIALIZE PROJECT FROM GITHUB AND GET UP AND RUNNING

* Using OsX or Linux: fork this project - clone fork to src/ruprojects/tictactoe directory, or where ever you keep your project sources.
Clone your fork to a directory of your choosing.
* Using Windows: Download the Vagrantfile only which is found [here](./vagrant/Vagrantfile) 
* download [vagrant box](https://dl.dropboxusercontent.com/u/7122561/package.box) and put into "vagrant" directory in your
working directory. In windows, create a directory to put both Vagrantfile and package.box (must be in same directory).

* open a terminal window, navigate to the directory containing package.box and Vagrantfile and type

``` 
vagrant up 
vagrant ssh
cd src/tictactoe
``` 

* In windows, open the virtual machine (Open Virtual Box, select VM and select "Show").
* Open a Terminal window in the virtual machine. Clone your fork to a working directory of your choosing.
* edit dockerbuild.sh file in your working directory
  * line “docker build -t gulli/tictactoe ./dist/“
  * change gulli to <yourname>


Run in Terminal inside virtual machine, in your working directory:
``` 
npm install
bower install
./dockerbuild

``` 

In OsX or linux, you can edit files inside or outside the VM, since the drive is mapped to ~/src/tictactoe inside
the virtual machine. Note: This directory is not useable on windows due to symlink limitations.

``` 
docker push <yourname>/tictactoe"
``` 

VIRTUALBOX DEV ENVIRONMENT

Make sure you have latest versions of Vagrant and VirtualBox installed.

Download vagrant virtual box from (location provided by teacher or USB stick)

VIRTUALBOX TEST ENVIRONMENT
On production/test server 

``` 
docker run -p 80:8080 -d -e "NODE_ENV=production" <yourname>/tictactoe
``` 

Navigate to http://yourServerIpAddress  and you should have yeoman landing page.


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
