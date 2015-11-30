#!/bin/bash
SERVER_IP=$1
if [ -z $SERVER_IP ] ; then
    SERVER_IP="95.85.44.69"
fi

sudo docker push katur/tictactoe
ssh root@$SERVER_IP 'git clone git@github.com:Katur7/hgop2015.git && cd hgop2015 && ./run.sh' 
