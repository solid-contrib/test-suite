Test Suite for [Solid 0.7](https://github.com/solid/solid-spec/blob/c9a8214/README.md)

This project includes a fork of the W3C LDP testsuite.

Prerequisites: [Docker](https://docs.docker.com/install/)

Run the following commands in your command line terminal:

```sh
docker build -t tester dockerfiles/tester/
docker build -t inrupt-pod-server dockerfiles/inrupt-pod-server
docker build -t trellis dockerfiles/trellis
docker build -t node-solid-server dockerfiles/node-solid-server
docker build -t gold dockerfiles/gold
docker build -t rww-play dockerfiles/rww-play
docker network create testnet
docker run -d --name=server --network=testnet inrupt-pod-server
docker run --network=testnet tester
docker stop server
docker rm server
```
