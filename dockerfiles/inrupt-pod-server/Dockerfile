FROM node
RUN git clone https://github.com/inrupt/pod-server
WORKDIR pod-server
RUN npm install
RUN npm run build
EXPOSE 8080/tcp
ENV DEBUG *
ENV SKIP_WAC true
CMD npm start
