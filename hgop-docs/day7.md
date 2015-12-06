# Day 7

Goal of the day is to introduce automated acceptance tests against the Tictactoe
command API running on the test server using a fluid test API approach.

Start by updating your gruntfile with latest version from 
https://github.com/stefaneg/hgop2015. Also, copy the contents of the server/acceptance
folder to your project.

Run 

``` 
export ACCEPTANCE_URL=http://<address of your api>
grunt mochaTest:acceptance
``` 

to run the acceptance tests.

Determine an appropriate way to run this using Jenkins:
- Same script must be used to deploy to test and production environments.
- We do not run the acceptance test suite against the production environment.

When you have the one acceptance test running, implement the same test using
the fluid API approach which is commented out at the bottom of 
tictactoe.acceptance.js

You are done when you have seen the test deployment fail due to a failing test
against the test environment and you have valid implementation of the fluid
test running against your test environment, and passing.

- Hint: The acceptance test assumes a fresh running instance. In order to repeat
the run successfully, the test system must be restarted. 
``` 
 docker restart <container name>  
``` 
