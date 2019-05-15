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

Caveat 1: the qualities of a software product can of course not be counted with a simple number of passing tests, so this list only gives a rough idea of levels of Solid spec compliance.

Caveat 2: not all servers may have been configured optimally in these test runs; if you know of ways to improve the outcome for any of these servers, please provide a pull request.

Caveat 3: this test suite still incomplete and heavily biased towards LDP Basic container support; a lot of tests for WAC, websockets-pubsub, webid-oidc, sparql-get and globbing are still missing.

1. Trellis (90 - 9 - 29 = 52 passing tests)
2. inrupt/pod-server (90 - 16 - 49 = 25 passing tests)
3. node-solid-server (90 - 28 - 47 = 15 passing tests)
4. Gold (90 - 20 - 69 = 1 passing test)
