## This should solve NPM installation issues encountered and allow docker image to be built.

Edit package.json
Remove line:

"grunt-node-inspector": "~0.1.5"


Replace line:

"karma-phantomjs-launcher": "~0.1.4",

with

"karma-firefox-launcher":"^0.1.7",

Run npm install after those changes.

Edit karma.conf.js

Replace "PhantomJS" with "Firefox"

Install firefox in CentOs virtual machine. Note: Using vagrant destroy is not an option after this 
unless you repackage the vagrant box.

Add this to .bashrc
``` 
export DISPLAY=:0
``` 
This is necessary to allow Firefox to be launched from a vagrant ssh session.
 

Now npm install should run without errors, and ./dockerbuild.sh should also run without issues.

