FROM node
RUN apt-get update && apt-get install -yq \
  vim \
  && apt-get clean
RUN git clone https://github.com/solid/solid-crud-tests /app
WORKDIR /app
RUN npm install
RUN cd node_modules/rdflib ; npm install ; npm run build ; cd ../..
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
CMD npm run jest
