To see what is running on your server
``` 
docker ps
``` 

To see which images are installed locally in docker:
``` 
docker images
``` 


To see output from server process running in a docker container. If something is not working,
this is the starting point to troubleshoot why. Get container id from running docker ps. Works
also with container name.
``` 
docker logs <containerId>
``` 

for example
``` 
docker logs tictactoe
``` 


Retrieve version info from a running container:
``` 
docker exec tictactoe cat githash.txt
``` 

Retrieve version info from a stopped image:
``` 
docker run <yourname>/tictactoe:latest cat githash.txt
``` 


