#!/bin/bash
docker push katur/tictactoe
ssh root@95.85.44.69 'cd hgop2015 && git pull origin master && ./run.sh' 
