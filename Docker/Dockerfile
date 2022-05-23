# for demo purposes trying to keep the dockerfile simple so not doing a build container
# assumption is that the quasar built files via "quasar build" are in ../dist/spa
FROM nginx:alpine

COPY --chown=nginx:nginx ../dist/spa /usr/share/nginx/html
# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

# users are not allowed to listen on priviliged ports
# by default nginx uses the standard port 80, just to
# have some flexibility we will alter the config to use
# a default port of 9080
RUN sed -i.bak 's/listen\(.*\)80;/listen 9080;/' /etc/nginx/conf.d/default.conf
EXPOSE 9080

# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

RUN addgroup nginx root
USER nginx