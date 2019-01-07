FROM chengyu0316/myblog_v2_react
RUN yarn build

FROM abiosoft/caddy
MAINTAINER chengyu0316@gmail.com

ADD ./caddy /caddy_server/
COPY --from=0 /app/dist /caddy_server/react_build

WORKDIR /caddy_server
ENTRYPOINT [ "./entrypoint.sh" ]
