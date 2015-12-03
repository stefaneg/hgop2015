# Day 6

Goal of the day is to get the server into a state to accept create game commands. Use
integration code recently pushed to stefaneg/hgop2015 as a reference. You can
copy-paste all new logic introduced in this push. You will also have to refactor 
commands/events to work with gameIds. 

You are done when you can post a create game command and get events with id back.

Hints:
- You'll have to install 'q' to use the memory store.
- Change gameHistory.spec.js to mata
- Adapt router.js and change the verbs there to match those in your commands.

