FROM golang

RUN \
  apt-get update -y && \
  apt-get install -y libraptor2-dev libmagic-dev && \
  rm -rf /var/lib/apt/lists/* && \
  go get -u -x github.com/linkeddata/gold/server

EXPOSE 8080
VOLUME ["/data"]
ENV TMPDIR="/tmp"

CMD ["server", "-http=:8080", "-root=/data/", "-boltPath=/tmp/bolt.db", "-debug"]
