#!/bin/bash

#echo "update docker hub images"
docker-compose build
docker-compose push

echo "init swarm mode"
docker swarm init
eval $(docker-machine env --shell bash swarm-manager)

echo "deploy containers"
docker stack deploy -c prod.yml pw

echo "back to normal mode"
unset DOCKER_TLS_VERIFY
unset DOCKER_HOST
unset DOCKER_CERT_PATH
unset DOCKER_MACHINE_NAME
