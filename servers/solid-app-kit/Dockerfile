FROM node
RUN apt-get update && apt-get install -yq \
  redis-server \
  vim
RUN git clone https://github.com/michielbdejong/solid-app-kit
WORKDIR solid-app-kit
RUN git checkout tested
RUN npm install
RUN npm run build
EXPOSE 443
COPY config.json .
ENV DEBUG *
ENV PORT 443
ENV HTTPS true
ENV DOMAIN server
ENV AUD https://server
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
RUN openssl req -new -x509 -days 365 -nodes \
  -out ./server.cert \
  -keyout ./server.key \
  -subj "/C=RO/ST=Bucharest/L=Bucharest/O=IT/CN=www.example.ro"
RUN /etc/init.d/redis-server start && \
  redis-cli SET useruser:alice "{\"username\":\"alice\",\"webID\":\"https://server/storage/alice/profile/card#me\",\"email\":\"alice@example.com\",\"password\":\"$2a$10$MJSSi5l4cVG3vG.lSaCsc.N4kstqx9aw98mSZSnrt3/0/4d/nGEX.\"}" && \
  redis-cli HSET v1/ v1/server/ true && \
  redis-cli HSET v1/server/ v1/server/storage/ true && \
  redis-cli HSET v1/server/storage/ v1/server/storage/alice/ true && \
  redis-cli HSET v1/server/storage/ v1/server/storage/alice/ true && \
  redis-cli HSET v1/server/storage/alice/ v1/server/storage/alice/.acl false && \
  redis-cli SET 1/server/storage/alice/.acl "{\"contentType\":\"text/turtle\",\"body\":\"@prefix acl: <http://www.w3.org/ns/auth/acl#>.\\n<#owner>\\n  a acl:Authorization;\\n  acl:agent <https://server/storage/alice/profile/card#me>;\\n  acl:accessTo <./>;\\n  acl:default <./>;\\n  acl:mode\\n    acl:Read, acl:Write, acl:Control.\",\"etag\":\"aew8ibI9BfkogPcINth7JA==\",\"rdfType\":1}" && \
  redis-cli HSET v1/server/storage/alice/ v1/server/storage/alice/profile/ true && \
  redis-cli HSET v1/server/storage/alice/ v1/server/storage/alice/profile/.acl false && \
  redis-cli HSET v1/server/storage/alice/ v1/server/storage/alice/profile/card false && \
  redis-cli SET v1/server/storage/alice/profile/.acl "{\"contentType\":\"text/turtle\",\"body\":\"@prefix acl: <http://www.w3.org/ns/auth/acl#>.\\n@prefix  foaf:  <http://xmlns.com/foaf/0.1/>.\\n<#owner>\\n  a acl:Authorization;\\n  acl:agent <https://server/storage/alice/profile/card#me>;\\n  acl:accessTo <./>;\\n  acl:default <./>;\\n  acl:mode\\n    acl:Read, acl:Write, acl:Control.\\n<#public>\\n  a acl:Authorization;\\n  acl:agent foaf:Agent;\\n  acl:accessTo <./>;\\n  acl:default <./>;\\n  acl:mode\\n    acl:Read.\",\"etag\":\"NHp/kK+ycUgOFu1J5P/W0Q==\",\"rdfType\":1}" && \
  redis-cli SET v1/server/storage/alice/profile/card "{\"contentType\":\"text/turtle\",\"body\":\"@prefix schema: <http://schema.org/>.\\n@prefix pim: <http://www.w3.org/ns/pim/space#>.\\n@prefix ldp: <http://www.w3.org/ns/ldp#>.\\n@prefix acl: <http://www.w3.org/ns/auth/acl#>.\\n@prefix foaf: <http://xmlns.com/foaf/0.1/>.\\n@prefix solid: <http://www.w3.org/ns/solid/terms#>.\\n\\n<> a foaf:PersonalProfileDocument ; foaf:primaryTopic <#me>.\\n<#me>\\n  a schema:Person, foaf:Person;\\n  pim:storage <https://server/storage/alice/>;\\n  solid:account <https://server/storage/alice/>;\\n  pim:preferencesFile <https://server/storage/alice/settings/prefs.ttl>;\\n  solid:privateTypeIndex <https://server/storage/alice/settings/privateTypeIndex.ttl>;\\n  solid:publicTypeIndex <https://server/storage/alice/settings/publicTypeIndex.ttl>;\\n  ldp:inbox <https://server/storage/alice/inbox/>;\\n  acl:trustedApp <#same-origin>.\\n<#same-origin>\\n  acl:origin <https://server>;\\n  acl:mode acl:Read, acl:Write, acl:Control.\",\"etag\":\"RxxEE7WhmcXrlon7v4Jx9g==\",\"rdfType\":1}"
CMD /etc/init.d/redis-server start && \
  npm start
