FROM chengyu0316/myblog_v2_react
RUN yarn build

FROM nginx

COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
