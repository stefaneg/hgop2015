# Day 9 - load/capacity tests

The goal today is to introduce a capacity test stage that gives us some idea on the
amount of traffic that a production server on similar hardware will be able to handle.

Update your gruntfile with the latest from stefaneg/hgop2015 project, this will add
capability to run *.load.js tests.

``` 
export ACCEPTANCE_URL=http://<address of your api>
grunt mochaTest:load
``` 

Copy tictactoe.load.js from stefaneg/hgop2015 project. Adapt it to use the fluid API you
wrote for acceptance tests. Also, adjust the number of runs and timeout to something that
makes sense for the performance numbers you get. It should be a number larger than 2 seconds
and smaller than 10 seconds. When you have run your test a few times and have a stable number,
fix the timeout to a number 20-30% higher than the longest execution you saw. This is 
your load test tolerance.

Add to jenkins the capability to run your load tests against your test server automatically
when the acceptance test stage has finished running.
- Note that in a team-setup, the load test environment would normally have its own deployment. 

For the purposes of this assignment, as your machines are loaded enough already, we'll 
reuse the test deployment for this.

The load test should appear as a separate stage in the build pipeline in Jenkins. It should
have three stages now.

Add to your report.md the result of your load test run. 

Question: Does the load test run in serial or in parallel? Add to report.md your answer
to this question with your reasoning (hint: google "nodejs asynchronous IO").
