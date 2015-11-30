#!/bin/bash
SERVER_IP=$1
if [ -z $SERVER_IP ] ; then
    SERVER_IP="95.85.44.69"
fi

sudo docker push katur/tictactoe
ssh root@$SERVER_IP 'docker pull katur/tictactoe && bash -s' < run.sh  
