# Independent Test Suite for Solid (version 2.0)
[![Join the chat at https://gitter.im/solid/test-suite](https://badges.gitter.im/solid/test-suite.svg)](https://gitter.im/solid/test-suite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Solid's independent test suite is maintained by [the test suite panel](https://github.com/solid/process/blob/main/panels.md#test-suite)
and sponsored through an [Open Collective](https://opencollective.com/independent-solid-test-suite). You can show your support by donating
even just 1 USD there, and we'll add you or your logo to our list of sponsors.

NB: This does not in any way give you a vote in the contents or the reporting of the test suite, in the Solid spec, or in any aspect of the Solid ecosystem. For that, you should join our [W3C-CG](https://www.w3.org/community/solid/).

## Gold Sponsors
NLNet Foundation donated 15,000 euros in 2020 as part of the [Solid-Nextcloud integration project](https://nlnet.nl/press/20210416-Nextcloud-Solid-compatible.html).

[![NLNet](https://user-images.githubusercontent.com/408412/117270023-17d3a200-ae59-11eb-84ab-f27823af1b66.png)](https://nlnet.nl)

## Awesome Sponsors
These awesome sponsors are already donating through our [Open Collective](https://opencollective.com/independent-solid-test-suite):
| [![Digita](https://user-images.githubusercontent.com/408412/117273440-6df61480-ae5c-11eb-89ec-93a72fea342b.png)](https://www.digita.ai) | [![Ontola](https://user-images.githubusercontent.com/408412/117268149-43558d00-ae57-11eb-8b69-d380b11bd86b.png)](https://ontola.io) | [![O Team](https://user-images.githubusercontent.com/408412/117268137-3df84280-ae57-11eb-9793-7bbefdbb324c.png)](https://o.team) | [![Interition](https://user-images.githubusercontent.com/408412/117268154-43ee2380-ae57-11eb-8613-c04d71f9afda.png)](https://interition.com) |
|---|---|---|---|
| [Digita](https://www.digita.ai) | [Ontola](https://ontola.io) | [O Team](https://o.team) | [Interition](https://interition.com) |


| ![(anonymous backer)](https://user-images.githubusercontent.com/408412/117300002-6d1fab80-ae79-11eb-9f10-71ace659e038.png) | ![Sjoerd van Groning](https://user-images.githubusercontent.com/408412/117299273-a3106000-ae78-11eb-9b79-6b627d500f69.png) |
|---|---|
| (anonymous backer) | Sjoerd van Groning |

## Introduction

This test suite runs various testers against various servers in a
Docker testnet. The testers can also run against live servers over
the public internet.

The following Solid Server projects run (parts of) this suite in
their continuous integration:
* [Node Solid Server](https://github.com/solid/node-solid-server/blob/master/test/surface/run-solid-test-suite.sh) (webid + crud + wac)
* [PHP Solid Server](https://github.com/pdsinterop/php-solid-server/blob/master/run-solid-test-suite.sh) (webid + crud + wac)
* [Solid-Nextcloud](https://github.com/pdsinterop/php-solid-server/blob/master/run-solid-test-suite.sh) (webid + crud + wac)
* [Community Solid Server](https://github.com/michielbdejong/community-server/blob/main/test/system/run-solid-test-suite.sh) (crud + wac)
* Inrupt ESS (crud + wac)
* TrinPod (coming soon!)

## Test-suite report
When run locally a [test-suite-report app](https://github.com/solid/test-suite/blob/main/test-suite-report.md.js) can be run : 
- the app uses the output json files produces by the tests run locally.
- the report links each failed test to the reported error.

See [latest test-suite-report.md](https://github.com/solid/test-suite/blob/main/test-suite-report.md). The report actually covers CRUD and WAC tests of CSS, ESS and NSS.

## WebID Provider Tests (version 2.0.3)

The following servers run the WebID Provider tests:

* `************************************` [Node Solid Server](https://github.com/solid/node-solid-server): 36/36
* `************************************` [Nextcloud Server](https://github.com/nextcloud/server): 36/36
  - (with [Solid-Nextcloud](https://github.com/pdsinterop/solid-nextcloud) enabled)
* `************************************` [PHP Solid Server](https://github.com/pdsinterop/php-solid-server): 36/36

## Solid CRUD Tests (version 4.0.0)

The following servers run the Solid CRUD tests ('+' means test is [related to websockets-pubsub](https://github.com/solid/test-suite/issues/111)):

* ******************************++++++++++++++++++++++++++ [PHP Solid Server](https://github.com/pdsinterop/php-solid-server): 56/56
* ******************************++++++++++++++++++++++++++ [Nextcloud Server](https://github.com/nextcloud/server): 56/56
  - (with [Solid-Nextcloud](https://github.com/pdsinterop/solid-nextcloud) enabled)
* ******************************++++++++++++++++++++++++++ [Node Solid Server](https://github.com/solid/node-solid-server): 56/56
* ******************************++++++++++++++++++++++++++ [Community Solid Server](https://github.com/solid/community-server): 56/56
* *****************************[-](https://github.com/solid/solid-crud-tests/blob/v4.0.0/test/surface/create-non-container.test.ts#L300-L306) [pod-compat.inrupt.com](https://pod-compat.inrupt.com): 29/30
  - (websockets-pubsub not implemented)

## Web Access Control Tests (version 4.0.0)

The following servers run the WAC tests:
* *********************************************************************** [PHP Solid Server](https://github.com/pdsinterop/php-solid-server): 71/71
* *********************************************************************** [Nextcloud Server](https://github.com/nextcloud/server): 71/71
  - (with [Solid-Nextcloud](https://github.com/pdsinterop/solid-nextcloud) enabled)
* *********************************************************************** [Node Solid Server](https://github.com/solid/node-solid-server): 71/71
* *********************************************************************** [Community Solid Server](https://github.com/solid/community-server): 71/71
* *********************************************************************[-](https://github.com/solid/web-access-control-tests/blob/v4.0.0/test/surface/update.test.ts#L348-L381)[-](https://github.com/solid/web-access-control-tests/blob/v4.0.0/test/surface/update.test.ts#L382-L416) [pod-compat.inrupt.com](https://pod-compat.inrupt.com): 69/71
  - (missing only PATCH-to-Append)

## Access Control Policy Tests (coming soon)

If more servers offer [Access Control Policies](https://github.com/solid/authorization-panel/blob/master/proposals/acp/index.md) as an experimental alternative to Solid's existing Web Access Control
system, the test-suite panel should find a way to create tests for that, too. But as of November 2020,
there are no concrete plans for this.

## Monetization Tests (version 1.0.0, experimental, work in progress)

As of 2021, [Web Monetization in Solid](https://github.com/solid/webmonetization) is an experiment, no real specifications have been written for it yet. These versioned tests are meant to help the discussion as it progresses.
The tests themselves are a work in progress, too. More to come as the project progresses.
If you're not yourself working on WebMonetization yourself, don't spend too much time trying to implement this feature.
If youre a Solid app developer and wondering which servers to use when experimenting with WebMonetization in your Solid app, these tests might help you find your way.
See https://github.com/solid/monetization-tests.
* ++ [Node Solid Server](https://github.com/solid/node-solid-server): 2/2

## Running the Test Suite

There is an outdated `runTests.sh` script, which is still the best starting point
to run for instance Kjetil's RDF-based tests, see [old-instructions.md](old-instructions.md).

To run the test suite against the various servers, it's best to follow their own CI scripts,
see the list above.

The scripts are very similar but have small differences in how they start up the system-under-test.
One key step is there obtaining a login cookie. Roughly, it works as follows:
* A Docker 'testnet' network is created
* The system-under-test is started in there, at `https://server`.
* For the WAC tests, a third-party server is also started, at `https://thirdparty`.
* Then, for each, a process is started that logs in and harvests a login cookie:
  * For node-solid-server, this is a `www-form-urlencoded` POST to /login/password with `username` and `password`
  * For php-solid-server, this is a `www-form-urlencoded` POST to /login with `username` and `password`
  * For Solid-Nextcloud, this is a headless browser (Puppeteer) which fills in the username and password on the page and clicks 'login'
  * Note that for community-solid-server, this step is not implemented yet, since it only supports unauthenticated CRUD so far.

Using the cookie, the testers will go through the WebID-OIDC dance (adding the Cookie header in each http request).
This allows the testers to get their DPop tokens signed, which they can then use to construct `Authorization` and `DPop` headers.
We use [solid-auth-fetcher](https://www.npmjs.com/package/solid-auth-fetcher) for this, specifically its
[obtainAuthHeaders](https://github.com/solid/solid-auth-fetcher/blob/master/src/obtainAuthHeaders.ts) functionality.

The webid-provider-tests stop when the tester successfully obtains auth headers.

The solid-crud-tests can run unauthenticated (which is what Community-Solid-Server currently does), or with `Authorization` and `DPop` headers.

The web-access-control-tests have to run authenticated. To pass these tests, the server currently needs to be an identity provider as well as a wac+crud storage.
The 'Alice' identity on the server should have full R/W/A/C access (accessTo+default) to the entire pod.
The tests then instantiate two [Solid Logic](https://www.npmjs.com/package/solid-logic) instances, one for 'Alice' on https://server, and one for 'Bob' on https://thirdparty.
Through those, Alice will edit her ACL documents to give Bob various kinds of access, and then Bob will test various operations.

See also:
* The [webid-provider-tests](https://github.com/solid/webid-provider-tests#usage) readme.
* The [solid-crud-tests](https://github.com/solid/solid-crud-tests#storage-tests) readme.
* The [web-access-control-tests](https://github.com/solid/web-access-control-tests) readme.
