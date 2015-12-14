### Day 10 - traceability, production env, and deploy any version

Assignment for today is to add full traceability to deployed version, and to add capacity to 
deploy any version that has been built hereafter to any environment (test or production). 
  
  
UPDATE: The following does not work due to extra output in report file...you can skip this for now.
  
Add server-side testing to test reports. In scripts that run tests (dockerbuild or grunt), 
add the following exports:

``` 
export MOCHA_REPORTER=xunit
export MOCHA_REPORT=server-tests.xml

``` 
UPDATE ENDS

Note that for this to work you need to have the Git Plugin and the build pipeline plugin installed.
You need to have Git configured as SCM on all stages, and use build trigger "Build after other projects 
are built."

- SKIP THIS: Change configuration of jUnit report plugin in Jenkins to pick up those reports
- Move the docker push command from to dockerbuild.sh. (And remember to answer question below )
- Change dockerbuild to mirror changes from teacher, that is, to tag with git revision hash.
- Configure the build pipeline in Jenkins to show 5 builds. 
- CORRECTION: This is not necessary: (Change script in commit stage to pass $GIT_COMMIT to dockerbuild.sh)
$GIT_COMMIT is picked up by the script.

## Link pipeline using git hash
- Install Jenkins "Copy Artifact Plugin". 
- In your Commit stage, add a post build step to archive dist/githash.txt.
- In Acceptance stage, Capacity stage, add a "Copy artifacts from another project" build step. Make sure it
is the first step in the stage (drag it up). It must be configured to copy artifacts from "Upstream project
which triggered this build".
- Add the following to the acceptance test deployment shell script in Jenkins.

``` 
export GIT_UPSTREAM_HASH=$(<dist/githash.txt)
env
....call your deployment script here and pass $GIT_UPSTREAM_HASH as a parameter.
``` 
  
- Change your deployment script to map to the port passed as parameter. (this is so you can run both 
 production and test environments on one vagrant server. You can also create a new vagrant instance on another
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
