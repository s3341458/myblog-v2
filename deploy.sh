#!/bin/bash

# update docker hub registry
docker-compose build
docker-compose push

# deploy
docker swarm init
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://35.239.194.202:2376"
export DOCKER_CERT_PATH="~/.docker/machine/machines/swarm-manager"
export DOCKER_MACHINE_NAME="swarm-manager"
docker stack deploy -c prod.yml pw

# back to normal mode
docker swarm leave --force
unset DOCKER_TLS_VERIFY
unset DOCKER_HOST
unset DOCKER_CERT_PATH
unset DOCKER_MACHINE_NAME

