Test Suite for [Solid 0.7](https://github.com/solid/solid-spec/blob/c9a8214/README.md)

This project includes a fork of the W3C LDP testsuite.

Prerequisites: [Docker](https://docs.docker.com/install/)

Run the following commands in your command line terminal:

```sh
docker build -t ldp-basic testers/ldp-basic
docker network create testnet
mkdir  -p reports

./test.sh inrupt-pod-server
./test.sh node-solid-server
./test.sh trellis
./test.sh gold 
# ./test.sh rww-play

grep Total\ tests reports/*

```
The output should look something like:
```sh
reports/gold.txt:Total tests run: 90, Failures: 20, Skips: 69
reports/inrupt-pod-server.txt:Total tests run: 90, Failures: 16, Skips: 49
reports/node-solid-server.txt:Total tests run: 90, Failures: 28, Skips: 47
reports/trellis.txt:Total tests run: 90, Failures: 9, Skips: 29
```

# Leaderboard

* 1. Trellis (90-9-29 = 52 passing tests)
* 2. inrupt/pod-server (90 - 16 - 49 = 25 passing tests)
* 3. node-solid-server (90 - 28 - 47 = 15 passing tests)
* 4. Gold (90 - 20 - 69 = 1 passing test)
