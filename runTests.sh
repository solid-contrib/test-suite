echo Testing $1 ...
echo Building image ...
docker build -t $1 servers/$1

echo Starting server without WAC ...
docker run -d --name=server --env SKIP_WAC=true --network=testnet $1

if [[ "$1" == trellis ]]
  then
    docker logs server
    echo Waiting for ten seconds ...
    sleep 10
    docker logs server
fi

echo Stopping server without WAC ...
docker stop server

echo Removing server without WAC ...
docker rm server

echo Starting server with WAC ...
docker run -d --name=server --network=testnet $1

if [[ "$1" == trellis ]]
  then
    docker logs server
    echo Waiting for ten seconds ...
    sleep 10
    docker logs server
fi

echo Running websockets-pubsub tester ...
docker run --network=testnet websockets-pubsub 2> reports/$1-websockets-pubsub.txt

echo Running rdf-fixtures tester ...
docker run --network=testnet rdf-fixtures > reports/$1-rdf-fixtures.txt

echo Stopping server with WAC ...
docker stop server

echo Removing server with WAC ...
docker rm server
