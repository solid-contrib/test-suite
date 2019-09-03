Test Suite for [Solid 0.7](https://github.com/solid/solid-spec/blob/c9a8214/README.md)

[![Join the chat at https://gitter.im/solid/test-suite](https://badges.gitter.im/solid/test-suite.svg)](https://gitter.im/solid/test-suite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


This project includes a fork of the W3C LDP testsuite.

Prerequisites: [Docker](https://docs.docker.com/install/)

Run the following commands in your command line terminal:

```sh
docker build -t ldp-basic testers/ldp-basic
docker build -t websockets-pubsub testers/websockets-pubsub
docker build -t rdf-fixtures testers/rdf-fixtures

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
Server              	LDP Basic           	Websockets-pub-sub  	RDF-fixtures
gold                	1/90                	0/1                 	0/0
inrupt-pod-server   	7/90                	0/1                 	0/0
node-solid-server   	15/90               	0/1                 	0/0
trellis             	53/90               	0/1                 	0/0
```

To run one tester against one server interactively, you can do for instance:
```sh
./runTesterAgainstServer.sh rdf-fixtures inrupt-pod-server
[...]
root@f0c7e54fb1f3:/# prove -lv /opt/run-scripts/
root@f0c7e54fb1f3:/# exit
[...]
```

or:

```sh
./runTesterAgainstServer.sh ldp-basic inrupt-pod-server
[...]
root@f0c7e54fb1f3:/# java -jar ldp-testsuite.jar --basic --server http://server:8080 --test PostContainer
root@f0c7e54fb1f3:/# exit
[...]
```

Caveat 1: the qualities of a software product can of course not be counted with a simple number of passing tests, so this list only gives a rough idea of levels of Solid spec compliance.

Caveat 2: not all servers may have been configured optimally in these test runs; if you know of ways to improve the outcome for any of these servers, please provide a pull request.

Caveat 3: this test suite still incomplete and heavily biased towards LDP Basic container support; a lot of tests for WAC, websockets-pubsub, webid-oidc, sparql-get and globbing are still missing.
