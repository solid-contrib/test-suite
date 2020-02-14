# Test Suite for Solid

[![Join the chat at https://gitter.im/solid/test-suite](https://badges.gitter.im/solid/test-suite.svg)](https://gitter.im/solid/test-suite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Introduction

The goal of the test suite project is to produce test suites that can
be used to verify the compliance of any server implementation to the
Solid specifications.

To accomplish this, the project will in part reuse existing test
suites that have been developed for technologies Solid depends on, for
example the W3C LDP testsuite. 

In part, the project will develop test suites specifically for Solid
technologies. Since most Solid specifications do not require extensive
program flow to be tested, the main line of work is to develop a
system that uses RDF to describe the tests, so that most of the
tests are developed using RDF. This does not exclude the possibility
of writing a test framework using a conventional programming language
for parts of Solid that would be better served by it.

## RDF-based Test Fixtures

This consists of Turtle files that formulates the tests by referencing
their implementation and parameterizes the tests. This is then
implemented in a *framework* that can be used to formulate tests in a
generic manner, i.e. not Solid-specific, and several *test scripts*
that implement the concrete tests.

The framework is implemented in Perl as
[Test::FITesque::RDF](https://metacpan.org/pod/Test::FITesque::RDF),
see its documentation for details. Tests scripts are in independent
modules, but the most important scripts are currently in
[Web::Solid::Test::HTTPLists](https://metacpan.org/pod/Web::Solid::Test::HTTPLists)

## Test Suite Summary in Docker

To summarize the test results, we have opted to build them in Docker,
and to run them within that. This also includes a fork of the W3C LDP
testsuite. This documents how to run it.

Prerequisites: [Docker](https://docs.docker.com/install/)

Run the following commands in your command line terminal:

```sh
docker build -t ldp-basic testers/ldp-basic
docker build -t websockets-pubsub testers/websockets-pubsub
docker build -t rdf-fixtures testers/rdf-fixtures

docker build -t table-reporter reporters/table
docker network create testnet
mkdir  -p reports

bash runTests.sh gold
bash runTests.sh inrupt-pod-server
bash runTests.sh node-solid-server
bash runTests.sh trellis
bash runTests.sh wac-ldp
# bash runTests.sh rww-play

egrep 'Tests:|tests run:|earl:outcome' reports/* | docker run -i table-reporter
```
The final output should look something like:
```sh
Server              	LDP Basic           	Websockets-pub-sub  	RDF-fixtures
gold                	0/90                	0/1                 	2/47
inrupt-pod-server   	0/90                	0/1                 	2/47
node-solid-server   	15/90               	0/1                 	22/49
trellis             	47/90               	0/1                 	10/45
wac-ldp             	57/90               	1/1                 	8/50
```

To run one tester against one server interactively, you can do for instance:
```sh
./runTesterAgainstServer.sh rdf-fixtures inrupt-pod-server
[...]
root@f0c7e54fb1f3:/# prove --formatter TAP::Formatter::EARL -l /opt/run-scripts/
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
