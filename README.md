# Test Suite for Solid

[![Join the chat at https://gitter.im/solid/test-suite](https://badges.gitter.im/solid/test-suite.svg)](https://gitter.im/solid/test-suite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Introduction

This test suite runs various testers against various servers in a
Docker testnet. The testers can also run against live servers over
the public internet.

## WebID Provider

The following servers pass 35/35 tests in the WebID Provider tests:

* [Node Solid Server](https://github.com/solid/node-solid-server)
* [PHP Solid Server](https://github.com/pdsinterop/php-solid-server)
* [Nextcloud Server](https://github.com/nextcloud/server) (with [Solid-Nextcloud](https://github.com/pdsinterop/solid-nextcloud) enabled)

## Solid CRUD

No servers currently pass 62/62 tests in the Solid CRUD tests yet. This is
the state of the landscape, as of November 2020:

* [Node Solid Server](https://github.com/solid/node-solid-server): 50/62
* [PHP Solid Server](https://github.com/pdsinterop/php-solid-server): 0/62
* [Community Solid Server](https://github.com/solid/community-server): 0/62

## Web Access Control

These tests are currently under development.

## Access Control Policies

If more servers offer [Access Control Policies](https://github.com/solid/authorization-panel/blob/master/proposals/acp/index.md) as an experimental alternative to Solid's existing Web Access Control
system, the test-suite panel should find a way to create tests for that, too. But as of November 2020,
there are no concrete plans for this.

## RDF-based Test Fixtures

These tests were created by Kjetil Kjernsmo during 2019. They
consist of Turtle files that formulates the tests by referencing
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
docker build -t webid-provider testers/webid-provider
docker build -t solid-crud testers/solid-crud
docker build -t web-access-control testers/web-access-control
# docker build -t rdf-fixtures testers/rdf-fixtures
# docker build -t ldp-basic testers/ldp-basic
# docker build -t websockets-pubsub testers/websockets-pubsub

docker build -t cookie helpers/cookie
docker build -t table-reporter reporters/table
docker network create testnet
mkdir  -p reports

bash runTests.sh node-solid-server
bash runTests.sh nextcloud-server
bash runTests.sh php-solid-server
# bash runTests.sh trellis
# bash runTests.sh solid-app-kit
# bash runTests.sh gold
# bash runTests.sh inrupt-pod-server
# bash runTests.sh rww-play

egrep 'Tests:|tests run:|earl:outcome' reports/* | docker run -i table-reporter
```
The final output should look something like:
```sh
Server              	WebID Provider      	Solid Crud          	Web Access Control  
nextcloud-server    	35/35               	0/73                	0/0                 
node-solid-server   	35/35               	48/73               	0/0                 
php-solid-server    	24/35               	0/73                	0/0                 
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
