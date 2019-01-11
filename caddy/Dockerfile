FROM chengyu0316/myblog_v2_react
RUN yarn build

FROM abiosoft/caddy

ADD ./caddy /caddy_server
COPY --from=0 /app/dist /caddy_server/react_build

RUN apk --no-cache add bash curl

WORKDIR /caddy_server
ENTRYPOINT [ "./entrypoint.sh" ]
