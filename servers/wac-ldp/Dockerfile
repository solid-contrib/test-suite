FROM node
RUN git clone https://github.com/michielbdejong/wac-ldp
WORKDIR wac-ldp
RUN npm install
RUN npm run prepare
RUN npm run build
EXPOSE 8080/tcp
COPY config.json .
ENV DEBUG *
ENV SKIP_WAC true
ENV AUD http://server:8080
CMD npm start
