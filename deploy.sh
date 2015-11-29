#!/bin/bash
docker push katur/tictactoe
ssh root@95.85.44.69 'cd hgop2015 && git pull origin master && docker run -p 80:8080 -d -e "NODE_ENV=production" katur/tictactoe'
