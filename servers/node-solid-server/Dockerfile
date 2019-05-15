    
FROM node:8.11.2
RUN git clone https://github.com/solid/node-solid-server
WORKDIR node-solid-server
RUN npm install
ADD config.json .
EXPOSE 8080
CMD ./bin/solid-test start
