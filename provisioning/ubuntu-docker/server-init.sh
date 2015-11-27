apt-get update
apt-get install docker.io
source /etc/bash_completion.d/docker.io
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9
sh -c "echo deb https://get.docker.com/ubuntu docker main /etc/apt/sources.list.d/docker.list"
apt-get update
apt-get install lxc-docker
curl -sSL https://get.docker.com/ubuntu/ | sudo sh
service docker start

# docker run -p 80:8080 -d -e "NODE_ENV=production" gulli/tictactoe
