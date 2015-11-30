# Day 3

Goal of today is to finish first two stories in the backlog. A commit stage which fails on
tests, and deploy latest to test automatically. These must be separate projects in Jenkins.

When you have a failing build due to test failure, and you can deploy to your test server when
the commit stage succeeds, you are done.

Note that the current version of dockerBuild.sh does NOT fail on test failure in grunt.

For the purpose of this course, we'll set up Jenkins CI on your development machine (CentOs by default),
and use that as a default build server. Normally this is a separate machine with a development-like
setup with everything required to build and test the project.
