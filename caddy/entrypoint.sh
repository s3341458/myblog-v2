#!/bin/bash

cat > Caddyfile <<-ENDFILE
$HOST_DOMAIN

gzip
log /var/log/caddy_access.log
errors /var/log/caddy_errors.log

root react_build

ENDFILE

if [[ $DEBUG = "True" ]]
then
    caddy
else
    # still do not exactly why but basically caddy started too early where
    # some network service is not really ready
    sleep 10
    caddy -agree -email chengyu0316@gmail.com -host $HOST_DOMAIN -log stderr
fi
