# Independent Test Suite for Solid (version 2.0)
[![Join the chat at https://gitter.im/solid/test-suite](https://badges.gitter.im/solid/test-suite.svg)](https://gitter.im/solid/test-suite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Solid's independent test suite is maintained by [the test suite panel](https://github.com/solid/process/blob/main/panels.md#test-suite)
and sponsored through an [Open Collective](https://opencollective.com/independent-solid-test-suite). You can show your support by donating
even just 1 USD there, and we'll add you or your logo to our list of sponsors.

NB: This does not in any way give you a vote in the contents or the reporting of the test suite, in the Solid spec, or in any aspect of the Solid ecosystem. For that, you should join our [W3C-CG](https://www.w3.org/community/solid/).

## Initial Sponsor
NLNet Foundation donated 15,000 euros in 2020 as part of the [Solid-Nextcloud integration project](https://nlnet.nl/press/20210416-Nextcloud-Solid-compatible.html).

[![NLNet](https://user-images.githubusercontent.com/408412/117270023-17d3a200-ae59-11eb-84ab-f27823af1b66.png)](https://nlnet.nl)

## Current Sponsors
These awesome *Solid-related startups* collectively sponsor the maintenance of the independent Solid test suite through our [Open Collective](https://opencollective.com/independent-solid-test-suite), click on their logos to check them out!

| [![Digita](https://user-images.githubusercontent.com/408412/117273440-6df61480-ae5c-11eb-89ec-93a72fea342b.png)](https://www.digita.ai) | [![O Team](https://user-images.githubusercontent.com/408412/117268137-3df84280-ae57-11eb-9793-7bbefdbb324c.png)](https://o.team) | [![GraphMetrix](https://user-images.githubusercontent.com/408412/117344630-e0d7ad80-aea5-11eb-8b7c-dbcefff79734.png)](https://graphmetrix.com) | [![Interition](https://user-images.githubusercontent.com/408412/117268154-43ee2380-ae57-11eb-8613-c04d71f9afda.png)](https://interition.com) | [![Ontola](https://user-images.githubusercontent.com/408412/117268149-43558d00-ae57-11eb-8b69-d380b11bd86b.png)](https://ontola.io) | [![Understory](https://user-images.githubusercontent.com/408412/118088415-545a4d00-b3c7-11eb-8f60-bda451827391.png)](https://understory.coop) | [![Understory](https://media-exp1.licdn.com/dms/image/C4E0BAQHocYfOjuWmBQ/company-logo_200_200/0/1550057556294?e=2159024400&v=beta&t=9ieVgUpPJ0S_YDUZ-LRy4jCEnzwreObM86ir6wJMoeM)](https://startinblox.com)
|---|---|---|---|---|---|---|
| [Digita](https://www.digita.ai) | [O Team](https://o.team) | [GraphMetrix](https://graphmetrix.com) | [Interition](https://interition.com) | [Ontola](https://ontola.io) | [Understory](https://understory.coop) | [Startin'blox](https://startinblox.com)

And a very big "Thank You" to the following *individuals* from the Solid community, who are donating through our [Open Collective](https://opencollective.com/independent-solid-test-suite) to make the independent Solid test suite possible, *you are all awesome!*
| ![(anonymous backer)](https://user-images.githubusercontent.com/408412/117300002-6d1fab80-ae79-11eb-9f10-71ace659e038.png) | ![Sjoerd van Groning](https://user-images.githubusercontent.com/408412/117299273-a3106000-ae78-11eb-9b79-6b627d500f69.png) | ![Jan Schill](https://user-images.githubusercontent.com/408412/117430926-e9bd9300-af28-11eb-98e6-8723fcba5b11.png) | ![Travis Vachon](https://user-images.githubusercontent.com/408412/118088923-14479a00-b3c8-11eb-941a-43052ee31d4d.png) | ![Sharon Stratsianis](https://user-images.githubusercontent.com/408412/153570149-067b7fb4-b52d-4553-95b3-514de715f7e0.png)
|---|---|---|---|---|
| (anonymous backer) | Sjoerd van Groning | Jan Schill | Travis Vachon | Sharon Stratsianis

## Context
Your server implementation probably already has its own test coverage. And maybe you already run the [LDP test suite](https://github.com/trellis-ldp/trellis-docker-tests/blob/main/run_ldp_testsuite.sh) or plan to run [Inrupt's conformance test suite](https://inrupt.com/blog/conformance-test-suite) when it comes out. So then why run an independent test suite in addition, you may ask?
The answer is simple: running more tests against your server will never decrease the amount of information you have.

The more tests you run, the more information you collect.
When all tests are green, it confirms what we already thought we knew, and improves our confidence.
Even better, *especially* when test results from different sources contradict each other, this information adds up to help us move forward.
This test suite tries to cover all Solid-related protocols and to only test for behaviours that are undisputed in the spec, but it's evolving and never perfect.

All tests are written from assumptions, and sometimes the same assumption that slipped into your code, also slipped into your tests. In that case, the tests will be green for the wrong reasons. This can be as simple as [a typo in a predicate](https://github.com/solid/community-server/issues/621) which was maybe copied twice from the same source. Easy to fix, but very important for interoperability!

Sometimes we find a test is incorrect or too strict. Sometimes we don't know what the correct behaviour is. In this case we mark the test as 'skip' and open a spec issue for debate. So at least we can turn an "unknown unknown" into a "known unknown".
When servers disagree, we need to document the difference. If we can describe the differences with reproducable tests, this will help us all have more detailed spec discussions! :)

Is this test suite a single complete and correct source of truth? The answer is no. Solid is still evolving and although there is a lot of consensus around how a Solid pod server should behave, there is no complete single truth. This test suite is an additional layer of defence that will help you compare your implementation of Solid with those of others! That way, we all collectively become more interoperable, and that will ultimately increase the value of Solid for everyone.

## Overview
This test suite runs various testers against various servers in a
Docker testnet. The testers can also run against live servers over
the public internet.

The following Solid pod server implementations have been tested against (parts of) this suite:

### Required parts:
* "IDP" refers to the [webid-provider-tests](https://github.com/solid/webid-provider-tests)
* "CRUD" refers to the core parts of the [solid-crud-tests](https://github.com/solid/solid-crud-tests)
* "WAC" refers to the [web-access-control-tests](https://github.com/solid/web-access-control-tests)

### Optional parts:
* "(WPS)" refers to [Websockets-Pub-Sub](https://github.com/solid/solid-spec/blob/master/api-websockets.md)
* "(CON)" refers to [multiple clients writing to the same pod concurrently](https://github.com/solid/specification/issues/91#issuecomment-904482600)
* "(MON)" refers to the experimental [Monetization tests](https://github.com/solid/monetization-tests)

For the 'version' column, servers have "(each PR)" if their continuous integration is set up to automatically test against each PR. For closed-source servers we list the public instance against which we run the test suite.

### Table

| #  | name                   | version        | prog.lang                                                                                                   | IDP | CRUD | WAC | (WPS) | (CON) | (MON) |
|----|------------------------|----------------|-------------------------------------------------------------------------------------------------------------|-----|------|-----|-------|-------|-------|
| 1. | Node Solid Server      | (each PR)      | [JavaScript](https://github.com/solid/node-solid-server/blob/master/test/surface/run-solid-test-suite.sh) |  ✓  |  ✓   |  ✓  |  ✓    |  ✓    |  ✓    |
| 2. | PHP Solid Server       | (each PR)      | [PHP](https://github.com/pdsinterop/php-solid-server/blob/master/run-solid-test-suite.sh)                 |   ✓ |  7)  |  ✓  |  ✓    |  ✓    |       |
| 3. | Solid-Nextcloud        | (each PR)      | [PHP](https://github.com/pdsinterop/php-solid-server/blob/master/run-solid-test-suite.sh)                 |  ✓  |  7)   |  ✓  |  ✓    |  ✓    |       |
| 4. | Community Solid Server | [`v1.1.0`](https://github.com/solid/community-server/releases/tag/v1.1.0)                                                                                                                   | [TypeScript](https://github.com/solid/community-server)                                                   | 1) |  ✓   |  6)  |  ✓    |   ✓  |       |
| 6. | TrinPod                | [stage.gr...x.net](https://stage.graphmetrix.net) | Lisp    | 1) |  ✓   |  ✓  |    |   2)   |       |
| 5. | Inrupt ESS             | [pod.inrupt.com](https://pod.inrupt.com) | Java            | 1) |  ✓   |  3)  |   4) |  5)   |       |
| 7. | Reactive-SoLiD         | (coming soon!) | [Scala](https://github.com/co-operating-systems/Reactive-SoLiD)                                           |     |      |     |       |       |       |
| 8. | DexPod                 | (coming soon!) | [Ruby](https://gitlab.com/ontola/dexpod)                                                                  |     |      |     |       |       |       |
| 9. | Disfluid               | (coming soon!) |  [C](https://labo.planete-kraus.eu/webid-oidc.git)                                                        |     |      |     |       |       |       |

### Footnotes

1) for some servers we have manually tested that they include a working webid-oidc identity provider, but we don't have the headless-browser tests that confirm this automatically for these servers. The [solid-oidc IDP tester page](https://solid.github.io/solid-oidc-tests/), in contrast, requires human interaction, but with that it can test any publicly hosted IDP.
2) TrinPod [will support](https://gitter.im/solid/test-suite?at=612101ace8de9946b4324a0b) this in the future
3) Although Inrupt ESS does have a WAC module, this feature is disabled on pod.inrupt.com for various reasons
4) See [#136](https://github.com/solid/test-suite/issues/136)
5) Due to architectural trade-offs, global locks are not supported in Inrupt ESS
6) See [#137](https://github.com/solid/test-suite/issues/137)
7) PSS and Solid-Nextcloud support PATCH with `application/sparql-update` but not with the newly required `text/n3`, see https://github.com/solid/solid-crud-tests/pull/53/files

## Test-suite report
When run locally a [test-suite-report app](https://github.com/solid/test-suite/blob/main/test-suite-report.md.js) can be run : 
- the app uses the output json files produces by the tests run locally.
- the report links each failed test to the reported error.

See [latest test-suite-report.md](https://github.com/solid/test-suite/blob/main/test-suite-report.md). The report actually covers CRUD and WAC tests of CSS, ESS and NSS.

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
