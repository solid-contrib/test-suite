#!/bin/bash
set -e

echo Testing $1 ...
echo Building image ...
docker build -t $1 servers/$1

echo Starting server ...
docker run -d --name=server --env-file servers/$1/env.list --network=testnet $1

# echo Starting idp ...
# docker run --rm -d --name=idp --network=testnet node-solid-server

until docker run --rm --network=testnet webid-provider curl -kI https://server 2> /dev/null > /dev/null
do
  echo Waiting for server to start, this can take up to a minute ...
  docker ps -a
  docker logs server || true
  sleep 1
done

if [[ "$1" == nextcloud-server ]]
  then
    echo Running init script for Nextcloud server ...
    docker exec -u www-data -it server sh /init.sh
    docker exec -u root -it server service apache2 reload
fi

echo Getting cookie...
export COOKIE="`docker run --rm --cap-add=SYS_ADMIN --network=testnet --name cookie -e SERVER_TYPE=$1 --env-file servers/$1/env.list cookie`"

# echo Running rdf-fixtures tester ...
# docker run --rm --network=testnet rdf-fixtures > reports/$1-rdf-fixtures.txt

# echo Running webid-provider tester with cookie $COOKIE...
# docker run --rm --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$1/env.list webid-provider 2> reports/$1-webid-provider.txt

echo Running solid-crud tester with cookie $COOKIE...
docker run --rm --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$1/env.list solid-crud 2> reports/$1-solid-crud.txt

# echo Running web-access-control tester with cookie $COOKIE...
# docker run --rm --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$1/env.list web-access-control 2> reports/$1-web-access-control.txt

echo Stopping server and idp...
docker stop server
# docker stop idp

echo Removing server...
docker rm server
