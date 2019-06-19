FROM node
RUN git clone https://github.com/inrupt/pod-server
RUN git checkout dev
WORKDIR pod-server
RUN npm install
RUN npm run build
EXPOSE 8080/tcp
ENV DEBUG *
ENV SKIP_WAC true
ENV AUD http://server:8080
CMD npm start
