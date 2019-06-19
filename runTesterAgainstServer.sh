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

echo Running $1 tester interactively ...
docker run --network=testnet -it $1 /bin/bash

echo Stopping server ...
docker stop server

echo Removing server ...
docker rm server
