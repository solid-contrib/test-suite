In general, we want to test the following things:

# Resource Servers

## Linked Data Platform

All `MUST` categories of the LDP test suite need to pass for:

* LDP Basic Containers
* LDP RDFSource
* LDP NonRDFSource

The following `SHOULD` and `MAY` categories of the LDP test suite need to pass for:

* Support for `POST`
* Support for `PATCH`
* Support for `PUT`
* Support for `DELETE`

## Web Access Control

* Enforcement of ACL resources
* Presence of ACL link header
* Presence of WAC-Allow header
* Support for agent groups
* Support for trustedApps

## Solid requirements

* SPARQL-Update to modify resources
* SPARQL-GET to read resources
* Globbing
* CORS headers

## WebSockets pubsub

* Inclusion of `Updates-VIA` header
* Support for `sub` requests
* Support for `pub` responses

# Identity providers
* Webid-oidc

We already have incorporated the LDP-Basic test-suite, and have set up a basic first test for WebSockets-pubsub.
We hope to make some significant progress on the other categories in the coming weeks, see our [issue tracker](https://github.com/solid/test-suite/issues) for more details.
