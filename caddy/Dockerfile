FROM ubuntu:xenial
MAINTAINER chengyu0316@gmail.com
RUN apt-get update && apt-get install -y ca-certificates curl
ADD ./caddy/ /caddy_server/
WORKDIR /caddy_server
ENTRYPOINT [ "./entrypoint.sh" ]
