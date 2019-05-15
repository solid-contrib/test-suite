Test Suite for [Solid 0.7](https://github.com/solid/solid-spec/blob/c9a8214/README.md)

This project includes a fork of the W3C LDP testsuite.

Prerequisites: [Docker](https://docs.docker.com/install/)

Run the following commands in your command line terminal:

```sh
docker build -t ldp-basic testers/ldp-basic
docker network create testnet
mkdir reports

./test.sh inrupt-pod-server
# ./test.sh node-solid-server
./test.sh trellis
./test.sh gold 
# ./test.sh rww-play

grep Total\ tests reports/*

```
