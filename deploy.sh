#!/bin/bash
SERVER_IP=$1
if [ -z $SERVER_IP ] ; then
    SERVER_IP="95.85.44.69"
fi

docker push katur/tictactoe
ssh root@$SERVER_IP 'bash -s' < run.sh  
