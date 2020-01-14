FROM node
RUN git clone https://github.com/michielbdejong/wac-ldp
WORKDIR wac-ldp
RUN npm install
RUN npm run prepare
RUN npm run build
EXPOSE 8080/tcp
COPY config.json .
ENV DEBUG *
ENV AUD http://server:8080
RUN apt-get update && apt-get install -yq vim && apt-get clean
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
CMD npm start
