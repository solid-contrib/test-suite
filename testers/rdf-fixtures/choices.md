# Some available choices when writing RDF fixture tables

The RDF formulation of fixture tables in the test suite affords quite
some freedom in how tests are formulated, within the boundaries of
some general designs.

For this test suite, the most important design is to formulate a tests
in the form of an ordered or unordered list. For each test, an ordered
list of HTTP requests can be made and compared to a list of expected
responses, optionally carrying authorization. The simplest is to not
maintain state through these tests, but it is possible to write test
scripts that carry information from previous responses.

This document discusses some choices that can be made within this
general design.

### Specific responses vs reuse

Many tests have the same expected responses. One choice is whether to
just accept this fact and define a reusable response, e.g.

```turtle
:get_ok_res a http:ResponseMessage ;
    http:status 200 .
```

Alternatively, we might formulate a unique response for each request,
even if they are exactly the same:

```turtle
:get_private_for_alice_req a http:ResponseMessage ;
    http:status 200 .
```

I have started to use mostly the former, as it seems easier to
understand and less code. The possible drawback is that if one wants
to introduce more expectations, the responses will have to be
reformulate. It seems to be better to address that when it occurs, though.

### Embed as blank nodes

HTTP requests and responses can be formulated without any reuse using
blank nodes, e.g. 

```turtle
test:requests (
  [ 
    a http:RequestMessage ;
    http:method "GET" ;
    http:requestURI </test-auth/private-for-alice.txt> .
  ]
) ;
```

This would result in much more compact tests that are probably easier
to understand in isolation, but without reuse, there would be a lot
more code to understand in total.

### Formulate as YA HTTP request-response pair or own test

We may formulate individual tests with request-response pairs, or
group them together around some common properties, like in this
example:

```turtle
:get_unauth a test:AutomatedTest ;
    test:purpose "Unauthenticated GET operations on resources."@en ;
    test:test_script <http://example.org/httplist#http_req_res_list> ;
    test:params [
        test:requests (
            :get_private_for_alice_req
            :get_own_origin_private_for_alice_req
        ) ;
        test:responses (
            :user_unauthn_res
            :user_unauthn_res
        )
    ] .
```

An alternative is to formulate this as two tests, which is much more
verbose:

```turtle

:get_unauth_no_origin a test:AutomatedTest ;
    test:purpose "Unauthenticated GET operations on resource with Origin."@en ;
    test:test_script <http://example.org/httplist#http_req_res_list> ;
    test:params [
        test:requests (
            :get_private_for_alice_req
        ) ;
        test:responses (
            :user_unauthn_res
        )
    ] .

:get_unauth_own_origin a test:AutomatedTest ;
    test:purpose "Unauthenticated GET operations on resource with own Origin."@en ;
    test:test_script <http://example.org/httplist#http_req_res_list> ;
    test:params [
        test:requests (
            :get_own_origin_private_for_alice_req
        ) ;
        test:responses (
            :user_unauthn_res
        )
    ] .
:get_unauth a test:AutomatedTest ;
    test:purpose "Unauthenticated GET operations on resources."@en ;
    test:test_script <http://example.org/httplist#http_req_res_list> ;
    test:params [
        test:requests (
            :get_private_for_alice_req
            :get_own_origin_private_for_alice_req
        ) ;
        test:responses (
            :user_unauthn_res
            :user_unauthn_res
        )
    ] .
```

These will run exactly the same tests, so the main difference is that
they are reported as two different tests, and so, the purpose of each
test becomes clearer.

Given the verbosity that would result, I have opted for the compact
version, but it may need to be revisited once we gain experience with
how the tests are used to test and improve code.

Both the above approaches work with the current framework, but we
could also conceivably pass a comment with each request and response
to help clarify. 
