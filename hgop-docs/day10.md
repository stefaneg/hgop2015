### Day 10 - traceability, production env, and deploy any version

Assignment for today is to add full traceability to deployed version, and to add capacity to 
deploy any version that has been built hereafter to any environment (test or production). 
  
Add server-side testing to test reports. In scripts that run tests (dockerbuild or grunt), 
add the following exports:

``` 
export MOCHA_REPORTER=xunit
export MOCHA_REPORT=server-tests.xml

``` 

Note that for this to work you need to have the Git Plugin and the build pipeline plugin installed.
You need to have Git configured as SCM on all stages, and use build trigger "Build after other projects 
are built."

- Change configuration of jUnit report plugin in Jenkins to pick up those reports
- Move the docker push command from to dockerbuild.sh. (And remember to answer question below )
- Change dockerbuild to mirror changes from teacher, that is, to tag with git revision hash.
- Configure the build pipeline in Jenkins to show 5 builds. 
- CORRECTION: This is not necessary: (Change script in commit stage to pass $GIT_COMMIT to dockerbuild.sh)
$GIT_COMMIT is picked up by the script.
- Change script in acceptance stage to pass on $GIT_PREVIOUS_SUCCESSFUL_COMMIT and port to your deployment
 script. Change your deployment script to map to the  port passed as parameter. (this is so you can run both production
 and test environments on one vagrant server. You can also create a new vagrant instance on another
 ip address, and deploy production there.)
- Create a new build stage for deploying to production. Copy script from acceptance deploy, change
its parameters so it matches your production environment. No tests run here at this time.

Note that all scripts to get this to work are in stefaneg/hgop2015 project. You can use those as a reference
to get this to work. Just do NOT overwrite what you've done previously, such as you deployment script.
You must modify and update your code.

To check whether you can deploy any version to test/production now, you can go to

http://<yourProdServer:port>/version.html

In there is a link which should point you to the commit history for that git revision on Github.

Check this by deploying an old version to production environment, and verify that it is old using
version.html

## Report 

Add to your report.md 
- What does this give us? Who would use the capability to track versions and why? Who would use capability
to deploy any version and why?
- What was wrong with having docker push in the deployment script rather than in the dockerbuild.sh 
 script?
- How does the "deploy any version, anywhere" build feature work? Hint: Track GIT_COMMIT
