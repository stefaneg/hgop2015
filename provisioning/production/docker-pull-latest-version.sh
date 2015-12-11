echo Running revision $2 on port $1

docker kill tictactoe
docker rm tictactoe
docker pull gulli/tictactoe:$2
docker run -p $1:8080 -d --name tictactoe$1 -e "NODE_ENV=production" gulli/tictactoe:$2
