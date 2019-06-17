Test Suite for [Solid 0.7](https://github.com/solid/solid-spec/blob/c9a8214/README.md)

[![Join the chat at https://gitter.im/solid/test-suite](https://badges.gitter.im/solid/test-suite.svg)](https://gitter.im/solid/test-suite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


This project includes a fork of the W3C LDP testsuite.

Prerequisites: [Docker](https://docs.docker.com/install/)

Run the following commands in your command line terminal:

```sh
docker build -t ldp-basic testers/ldp-basic
docker build -t websockets-pubsub testers/websockets-pubsub
docker build -t perl-based testers/perl-based

docker build -t table-reporter reporters/table
docker network create testnet
mkdir  -p reports

./runTests.sh inrupt-pod-server
./runTests.sh node-solid-server
./runTests.sh trellis
./runTests.sh gold
# ./runTests.sh rww-play

grep [Tt]ests reports/* | docker run -i table-reporter
```
The final output should look something like:
```sh
Server              	LDP Basic           	Websockets-pub-sub  	Perl-based
gold                	1/90                	0/1                 	5/9
inrupt-pod-server   	56/90               	1/1                 	3/9
node-solid-server   	15/90               	0/1                 	4/9
trellis             	53/90               	0/1                 	6/9
```

Caveat 1: the qualities of a software product can of course not be counted with a simple number of passing tests, so this list only gives a rough idea of levels of Solid spec compliance.

Caveat 2: not all servers may have been configured optimally in these test runs; if you know of ways to improve the outcome for any of these servers, please provide a pull request.

Caveat 3: this test suite still incomplete and heavily biased towards LDP Basic container support; a lot of tests for WAC, websockets-pubsub, webid-oidc, sparql-get and globbing are still missing.
