#!/bin/bash
# Pull latest image
docker pull katur/tictactoe

# Kill the old container
echo "Killing old container"
docker kill tictactoe
docker rm tictactoe

# Start a new container
echo "Starting new container"
docker run -p 80:8080 -d --name tictactoe -e "NODE_ENV=production" katur/tictactoe
