:
#Should work in any Bourne shell descendant, tested with dash and bash.


set -o errexit -o nounset
server="$1"

#Stops and removes the docker container named "server", reporting this with the arguments.
cleanServer () {
  echo INT, TERM, or EXIT trapped with status $?
  echo Stopping server "$@" ...
  docker stop server

  echo Removing server "$@" ...
  docker rm server
}

waitIfTrellis () {
  case "$server" in 
    trellis)
      docker logs server
      echo Waiting for ten seconds ...
      sleep 10
      docker logs server 
      ;; 
  esac
}

#Install clean up action:
trap "cleanServer on exit; exit" INT TERM EXIT

echo Testing $server ...
echo Building image ...
docker build -t $server servers/$server

echo Starting server without WAC ...
docker run -d --name=server --env SKIP_WAC=true --network=testnet $server

waitIfTrellis

echo Running ldp-basic tester ...
docker run --network=testnet ldp-basic > reports/$server-ldp-basic.txt || echo ... Errors in ldp-basic tester

cleanServer without WAC

echo Starting server with WAC ...
docker run -d --name=server --network=testnet $server

waitIfTrellis

echo Running websockets-pubsub tester ...
docker run --network=testnet websockets-pubsub 2> reports/$server-websockets-pubsub.txt || echo ... Errors in websockets-pubsub tester

echo Running rdf-fixtures tester ...
docker run --network=testnet rdf-fixtures > reports/$server-rdf-fixtures.txt || echo ... Errors in rdf-fixtures tester

cleanServer with WAC

