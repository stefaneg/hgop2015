# Day 5

## Implement server logic. 

Using samples gathered yesterday, use a **strict** TDD approach to implement server logic (see TTD circle
from Implementing a testing strategy lecture).
It is important to use similar entry/exit points as is done in the TDD demo, that is, input is a command,
output is an event array. Use your own names, no copy-pasting please. I want to see you do this as individuals.

Goal of the day is to finish collecting examples for the tic-tac-toe game, using
event based approach. When you have as good a list of examples as you think you
can do in a reasonable amount of time, start writing server side code using TDD
approach demoed today. Use code in stefaneg/tictactoe as a reference, do not copy.
Commit on each test pass. 

You're done when you have "game won" and "game draw" events tested implemented reliably and 
correctly.

Important: Commit to git **every** time a test passes for the first time.

### Hints

* tictactoeState should not know anything about commands. It only knows about events and state.
* tictactoe object must ask the state object about the state, should not know about things like
 how board state is maintained.
* Do not worry about data storage or routing at this point. Will be covered later.
* Returning two or more events at a time can be appropriate.

## Useful grunt commands
``` 
grunt watch:mochaTest
``` 
execute server side tests as soon as anything changes.
 
``` 
grunt test watch
``` 
execute client side tests as soon as anything changes.
