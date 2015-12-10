#! /bin/bash
# Test machine 192.168.50.4

echo Deploy $3 to http://$1:$2

scp provisioning/production/docker-pull-latest-version.sh vagrant@$1:~/docker-pull-latest-version.sh
ssh vagrant@$1 cat ~/docker-pull-latest-version.sh
ssh vagrant@$1 ~/docker-pull-latest-version.sh $2 $3
