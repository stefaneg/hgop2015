HGOP Project Template (TicTacToe) 
=========

Getting started with this project template. After this you should have the project up-and-running on your
development virtual machine.


### Thursday 26.11

VIRTUALBOX DEV ENVIRONMENT

Make sure you have latest versions of Vagrant and VirtualBox installed.


INITIALIZE PROJECT FROM GITHUB AND GET UP AND RUNNING

Windows:
* Download the Vagrantfile only which is found [here](./vagrant/Vagrantfile)
* create a directory to put both Vagrantfile and package.box (must be in same directory).
* edit Vagrantfile and remove folder mapping for /home/vagrant/src/tictactoe
* open a terminal window, navigate to the directory containing package.box and Vagrantfile and type

``` 
vagrant up 
vagrant ssh
mkdir src
cd src
``` 
Now clone your fork into this directory and cd into it. This is your working directory.


OsX:
* Fork this project - clone fork to src/ruprojects/tictactoe directory, or where ever you 
keep your project sources. Clone your fork to a directory of your choosing.
* Download [vagrant box](https://dl.dropboxusercontent.com/u/7122561/package.box) and put into "vagrant" 
directory in your working directory. In windows, 
* open a terminal window, navigate to the directory containing package.box and Vagrantfile and type

``` 
vagrant up 
vagrant ssh
cd src/tictactoe
``` 

BUILD DOCKER IMAGE
* edit dockerbuild.sh file in your working directory
  * line “docker build -t gulli/tictactoe ./dist/“
  * change gulli to <yourname>


Run in Terminal inside virtual machine, in your working directory (/home/vagrant/src/tictactoe):
``` 
npm install
bower install
grunt serve

``` 

You should now be able to open your browser on your computer (not in VM) and navigate to http://localhost:9000 and see Yeoman
landing page. Try to figure out how that works.


When done, spend some time studying technologies used today. 

In your working directory root, create a file "report.md". 
Write a paragraph in Icelandic on each of the following technologies describing what it does.
* Vagrant
* VirtualBox
* Grunt
* npm 
* nodejs
* bower

and if you find other interesting stuff, feel free to say something about that too.


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
