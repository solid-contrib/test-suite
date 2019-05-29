In general, we want to test the following things: 

# Storage servers
Four big categories, basically:
* LDP Basic Containers (see LDP test suite)
* Web Access Control (including agent groups, trustedApps, and WAC-Allow headers)
* Sparql-update, Sparql-GET, Globbing
* WebSockets-pubsub

# Identity providers
* Webid-oidc

We already have incorporated the LDP-Basic test-suite, and have set up a basic first test for WebSockets-pubsub.
We hope to make some significant progress on the other categories in the coming weeks, see our [issue tracker](https://github.com/solid/test-suite/issues) for more details.
