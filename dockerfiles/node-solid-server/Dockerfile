    
FROM node:8.11.2-onbuild
RUN git clone https://github.com/solid/node-solid-server
WORKDIR node-solid-server
COPY config.json-default config.json
RUN openssl req \
    -new \
    -newkey rsa:4096 \
    -days 365 \
    -nodes \
    -x509 \
    -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com" \
    -keyout privkey.pem \
    -out fullchain.pem
EXPOSE 8443
CMD npm run solid start
