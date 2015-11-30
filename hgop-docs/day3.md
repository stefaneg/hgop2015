# Day 3

Hints: 
* Docker command order for completing assignment from day 2 is kill, rm, pull, run. Use --name parameter to make this easy.
* Start with making sure you can execute each step successfully from the command line before integrating into script and testing in build.
* ./dockerbuild.sh must exit with failure if grunt fails, or if docker build fails. 
  [Exit shell script based on exit code](http://stackoverflow.com/questions/90418/exit-shell-script-based-on-process-exit-code). 
  Good way to fail build is to modify a test to fail.
  
* You must set up communication to test server to happen without interaction needed. Use ssh for that. See
 [SSH passwordless login](http://www.tecmint.com/ssh-passwordless-login-using-ssh-keygen-in-5-easy-steps/)
* Do not include docker push in ./dockerbuild.sh



Goal of today is to finish first two stories in the backlog. A commit stage which fails on
tests, and deploy latest to test automatically. These must be separate projects in Jenkins.

When you have a failing build due to test failure, and you can deploy to your test server when
the commit stage succeeds, you are done.

Note that the current version of dockerBuild.sh does NOT fail on test failure in grunt.

For the purpose of this course, we'll set up Jenkins CI on your development machine (CentOs by default),
and use that as a default build server. Normally this is a separate machine with a development-like
setup with everything required to build and test the project.
