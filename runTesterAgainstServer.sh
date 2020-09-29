echo Running tester $1 against server $2 ...
echo Building image ...
docker build -t $1 testers/$1
docker build -t $2 servers/$2

echo Starting server ...
docker run -d --name=server --network=testnet $2

if [[ "$2" == trellis ]]
  then
    docker logs server
    echo Waiting for ten seconds ...
    sleep 10
    docker logs server
fi

if [[ "$2" == nextcloud-server ]]
  then
    sleep 10
    docker logs server
    echo Running init script for Nextcloud server ...
    docker exec -u www-data -it server sh /init.sh
    docker exec -u root -it server service apache2 reload
    echo Getting cookie...
    export COOKIE="`docker run --rm --cap-add=SYS_ADMIN --network=testnet --name cookie --env-file servers/$2/env.list cookie`"
fi

echo env vars:
cat servers/$2/env.list
echo COOKIE=$COOKIE
echo Running $1 tester interactively...
docker run --network=testnet --name tester --env COOKIE="$COOKIE" --env-file servers/$2/env.list -it $1 /bin/bash

echo Tester exited, stopping server ...
docker stop server

echo Removing tester and server ...
docker rm tester
docker rm server
