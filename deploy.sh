#!/bin/bash

# update docker hub registry
#docker-compose build
#docker-compose push

# deploy
export DOCKER_TLS_VERIFY="1";
export DOCKER_HOST="tcp://35.239.194.202:2376";
export DOCKER_CERT_PATH="~/.docker/machine/machines/swarm-manager";
export DOCKER_MACHINE_NAME="swarm-manager";
docker stack deploy -c prod.yml pw

# back to normal mode
unset DOCKER_TLS_VERIFY "1";
unset DOCKER_HOST "tcp://35.239.194.202:2376";
unset DOCKER_CERT_PATH "/home/chengyu/.docker/machine/machines/swarm-manager";
unset DOCKER_MACHINE_NAME "swarm-manager";

