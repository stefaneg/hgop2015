# Setting up jenkins CI on centos dev machine

For the purpose of this exercise, we'll install Jenkins CI server on the development machine
to preserve resources. Normally this service would reside on its own server where all developers
in the team could access it. 

I recommend increasing the memory allocation of the CentOs dev/build machine to at least 1536mb if you 
can, this will speed up all operations once Jenkins is installed.

Follow instructions here:

[Install Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Red+Hat+distributions)

[Follow these instructions](http://blog.manula.org/2013/03/running-jenkins-under-different-user-in.html) to change
jenkins user to vagrant.

Restart the jenkins service to ensure changes take, 

Note that you need "Show" the desktop from Virtual box GUI before firefox can run.

Make sure you can open firefox with a Jenkins script. 

Create a freestyle project and add a build step with the 
following shell script:

``` 
export DISPLAY=:0
firefox
``` 

Running this project should open a new firefox window on your CentOs desktop.

Grunt build and your ssh deployment script should now run without problems.

Note that /usr/local/bin is not in Jenkins path by default, you'll have to add
it to the path in order to be able to execute npm, bower and grunt.

