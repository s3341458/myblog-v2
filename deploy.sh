#!/bin/bash

# update docker hub registry
docker-compose build
docker-compose push

# redeploy
hyper compose down
hyper pull chengyu0316/myblog_v2
hyper pull chengyu0316/caddy
hyper compose up -f hyper.yml -d

