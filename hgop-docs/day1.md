# Day 1

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

Build and get your project up and running.

Run in Terminal inside virtual machine, in your working directory (/home/vagrant/src/tictactoe):
``` 
npm install
bower install
grunt serve

``` 

You should now be able to open your browser on your computer (not in VM) and navigate to 
http://localhost:9000 and see Yeoman landing page. Try to figure out how that works.

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
