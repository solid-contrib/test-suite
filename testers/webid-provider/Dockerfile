FROM node
RUN apt-get update && apt-get install -yq \
  vim \
  && apt-get clean
RUN git clone https://github.com/solid/webid-provider-tests /app
WORKDIR /app
RUN git checkout v1.1.0
RUN npm install
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
CMD npm run jest
