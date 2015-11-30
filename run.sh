#!/bin/bash
# Get the old container id
CID=$(sudo docker ps | grep "tictactoe" | awk '{print $1}')

# Kill the old container
if [ "$CID" != "" ];
then
  echo "Killing old container"
  sudo docker kill $CID
fi

# Start a new container
echo "Starting new container"
docker run -p 80:8080 -d -e "NODE_ENV=production" katur/tictactoe
