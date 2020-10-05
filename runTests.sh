echo Testing $1 ...
echo Building image ...
docker build -t $1 servers/$1

echo Starting server ...
docker run -d --name=server --network=testnet $1

if [[ "$1" == trellis ]]
  then
    docker logs server
    echo Waiting for ten seconds ...
    sleep 10
    docker logs server
fi

if [[ "$1" == nextcloud-server ]]
  then
    sleep 10
    docker logs server
    echo Running init script for Nextcloud server ...
    docker exec -u www-data -it server sh /init.sh
    docker exec -u root -it server service apache2 reload
    echo Getting cookie...
    export COOKIE="`docker run --rm --cap-add=SYS_ADMIN --network=testnet --name cookie --env-file servers/$1/env.list cookie`"
fi

# echo Running rdf-fixtures tester ...
# docker run --rm --network=testnet rdf-fixtures > reports/$1-rdf-fixtures.txt

echo Running webid-provider tester with cookie $COOKIE...
docker run --rm --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$1/env.list webid-provider 2> reports/$1-webid-provider.txt

echo Running solid-crud tester with cookie $COOKIE...
docker run --rm --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$1/env.list solid-crud 2> reports/$1-solid-crud.txt

echo Running web-access-control tester with cookie $COOKIE...
docker run --rm --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$1/env.list web-access-control 2> reports/$1-web-access-control.txt

echo Stopping server with WAC ...
docker stop server

echo Removing server with WAC ...
docker rm server
