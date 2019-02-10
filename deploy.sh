#!/bin/bash

echo "update docker hub images"
docker-compose build
docker-compose push

echo "init swarm mode"
docker swarm init
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://35.239.194.202:2376"
export DOCKER_CERT_PATH="/home/chengyu/.docker/machine/machines/swarm-manager"
export DOCKER_MACHINE_NAME="swarm-manager"

echo "deploy containers"
docker stack deploy -c prod.yml pw

echo "back to normal mode"
unset DOCKER_TLS_VERIFY
unset DOCKER_HOST
unset DOCKER_CERT_PATH
unset DOCKER_MACHINE_NAME
docker swarm leave --force
