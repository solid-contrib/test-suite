
## SOLID-TEST-SUITE REPORT                                         

### 1. SUMMARY by testFile

- crud-results.json

  CSS               

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         MUST        {"passed":36,"failed":1,"pending":0,"total":37}
         WPS         {"passed":26,"failed":4,"pending":0,"total":30}
         total       {"passed":64,"failed":5,"pending":0,"total":69}
  ESS               

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         MUST        {"passed":29,"failed":7,"pending":1,"total":37}
         WPS         {"passed":0,"failed":0,"pending":30,"total":30}
         total       {"passed":29,"failed":7,"pending":33,"total":69}
  NSS               

         MAY         {"passed":0,"failed":2,"pending":0,"total":2}
         MUST        {"passed":0,"failed":37,"pending":0,"total":37}
         WPS         {"passed":0,"failed":30,"pending":0,"total":30}
         total       {"passed":0,"failed":69,"pending":0,"total":69}

- wac-results.json

  CSS               

         MUST        {"passed":75,"failed":8,"pending":0,"total":83}
         total       {"passed":75,"failed":8,"pending":0,"total":83}
  ESS               

         MUST        {"passed":51,"failed":12,"pending":0,"total":63}
         total       {"passed":51,"failed":12,"pending":0,"total":63}
  NSS               

         MUST        {"passed":63,"failed":0,"pending":0,"total":63}
         total       {"passed":63,"failed":0,"pending":0,"total":63}

### 2. SUMMARY by server

- CSS

  crud-results.json 

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         MUST        {"passed":36,"failed":1,"pending":0,"total":37}
         WPS         {"passed":26,"failed":4,"pending":0,"total":30}
         total       {"passed":64,"failed":5,"pending":0,"total":69}
  wac-results.json  

         MUST        {"passed":75,"failed":8,"pending":0,"total":83}
         total       {"passed":75,"failed":8,"pending":0,"total":83}

- ESS

  crud-results.json 

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         MUST        {"passed":29,"failed":7,"pending":1,"total":37}
         WPS         {"passed":0,"failed":0,"pending":30,"total":30}
         total       {"passed":29,"failed":7,"pending":33,"total":69}
  wac-results.json  

         MUST        {"passed":51,"failed":12,"pending":0,"total":63}
         total       {"passed":51,"failed":12,"pending":0,"total":63}

- NSS

  crud-results.json 

         MAY         {"passed":0,"failed":2,"pending":0,"total":2}
         MUST        {"passed":0,"failed":37,"pending":0,"total":37}
         WPS         {"passed":0,"failed":30,"pending":0,"total":30}
         total       {"passed":0,"failed":69,"pending":0,"total":69}
  wac-results.json  

         MUST        {"passed":63,"failed":0,"pending":0,"total":63}
         total       {"passed":63,"failed":0,"pending":0,"total":63}

### 3. UNIT TESTS by testFile and level

- crud-results.json                                               

  - MAY

    - Alice's pod

    <table><tbody><tr><td></td><td width=465>Get RDFa > As JSON-LD</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T060>T060</a></td><td width=400>   Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T060>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Get RDFa > As Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T061>T061</a></td><td width=400>   Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T061>failed</a></td></tr></tbody></table>

                    MAY results                                 2/0/0/2       0/0/2/2       0/2/0/2       

  - MUST

    - Delete

    <table><tbody><tr><td></td><td width=465>non-container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T001>T001</a></td><td width=400> deletes the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T001>failed</a></td></tr>
    <tr><td><a href=#T002>T002</a></td><td width=400> removes the resource from the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T002>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>non-empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T005>T005</a></td><td width=400> leaves the container with the resource in it</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T005>failed</a></td></tr>
    <tr><td><a href=#T006>T006</a></td><td width=400> leaves the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T006>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T009>T009</a></td><td width=400> deletes the container</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T009>failed</a></td></tr></tbody></table>

    - Update

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting plain text with plain text</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T011>T011</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T011>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting Turtle with Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T013>T013</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T013>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT (same Turtle content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T015>T015</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T015>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to add triple</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T017>T017</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55><a href=#T017>failed</a></td><td width=55><a href=#T017>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (same content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T019>T019</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T019>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T021>T021</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T021>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T023>T023</a></td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T023>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T025>T025</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T025>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T027>T027</a></td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T027>failed</a></td></tr></tbody></table>

    - Concurrency

    <table><tbody><tr><td></td><td width=465>Try to create the same resource, using PUT 10 times</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T029>T029</a></td><td width=400> succeeds exactly once</td><td width=55><a href=#T029>failed</a></td><td width=55>passed</td><td width=55><a href=#T029>failed</a></td></tr>
    <tr><td><a href=#T030>T030</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T030>failed</a></td></tr>
    <tr><td><a href=#T031>T031</a></td><td width=400> body was set by the successful request</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T031>failed</a></td></tr>
    <tr><td><a href=#T032>T032</a></td><td width=400> adds the resource in the container listing exactly once</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T032>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Use PATCH 10 times to add triple to the same resource</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T035>T035</a></td><td width=400> succeeds 10 times</td><td width=55>passed</td><td width=55><a href=#T035>failed</a></td><td width=55><a href=#T035>failed</a></td></tr>
    <tr><td><a href=#T036>T036</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55><a href=#T036>failed</a></td><td width=55><a href=#T036>failed</a></td></tr></tbody></table>

    - Create non-container

    <table><tbody><tr><td></td><td width=465>in an existing container > using POST</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T038>T038</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T038>failed</a></td></tr>
    <tr><td><a href=#T039>T039</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T039>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T041>T041</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T041>failed</a></td></tr>
    <tr><td><a href=#T042>T042</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T042>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T045>T045</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55><a href=#T045>failed</a></td><td width=55><a href=#T045>failed</a></td></tr>
    <tr><td><a href=#T046>T046</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55><a href=#T046>failed</a></td><td width=55><a href=#T046>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T049>T049</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T049>failed</a></td></tr>
    <tr><td><a href=#T050>T050</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T050>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T054>T054</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55><a href=#T054>failed</a></td><td width=55><a href=#T054>failed</a></td></tr>
    <tr><td><a href=#T055>T055</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55><a href=#T055>failed</a></td><td width=55><a href=#T055>failed</a></td></tr></tbody></table>

    - Alice's storage root

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T059>T059</a></td><td width=400> is an ldp BasicContainer</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T059>failed</a></td></tr></tbody></table>

    - Alice's pod

    <table><tbody><tr><td></td><td width=465>GET Turtle > As JSON-LD</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T062>T062</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T062>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>GET Turtle > As Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T063>T063</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T063>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>GET JSON-LD > As JSON-LD</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T064>T064</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T064>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>GET JSON-LD > As Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T065>T065</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T065>failed</a></td></tr></tbody></table>

    - Create container

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T066>T066</a></td><td width=400> creates the container</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T066>failed</a></td></tr>
    <tr><td><a href=#T067>T067</a></td><td width=400> adds the resource in the existing container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55><a href=#T067>failed</a></td></tr></tbody></table>

                    MUST results                                36/1/0/37     29/7/1/37     0/37/0/37     

  - WPS

    - Delete

    <table><tbody><tr><td></td><td width=465>non-container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T003>T003</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55><a href=#T003>failed</a></td><td width=55>pending</td><td width=55><a href=#T003>failed</a></td></tr>
    <tr><td><a href=#T004>T004</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T004>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>non-empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T007>T007</a></td><td width=400>   does not emit websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T007>failed</a></td></tr>
    <tr><td><a href=#T008>T008</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T008>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T010>T010</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T010>failed</a></td></tr></tbody></table>

    - Update

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting plain text with plain text</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T012>T012</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T012>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting Turtle with Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T014>T014</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T014>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT (same Turtle content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T016>T016</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T016>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to add triple</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T018>T018</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T018>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (same content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T020>T020</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T020>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T022>T022</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T022>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T024>T024</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55><a href=#T024>failed</a></td><td width=55>pending</td><td width=55><a href=#T024>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T026>T026</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T026>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T028>T028</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T028>failed</a></td></tr></tbody></table>

    - Concurrency

    <table><tbody><tr><td></td><td width=465>Try to create the same resource, using PUT 10 times</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T033>T033</a></td><td width=400>   emits websockets-pubsub on the container exactly once</td><td width=55><a href=#T033>failed</a></td><td width=55>pending</td><td width=55><a href=#T033>failed</a></td></tr>
    <tr><td><a href=#T034>T034</a></td><td width=400>   emits websockets-pubsub on the resource exactly once</td><td width=55><a href=#T034>failed</a></td><td width=55>pending</td><td width=55><a href=#T034>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Use PATCH 10 times to add triple to the same resource</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T037>T037</a></td><td width=400>   emits websockets-pubsub on the resource 10 times</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T037>failed</a></td></tr></tbody></table>

    - Create non-container

    <table><tbody><tr><td></td><td width=465>in an existing container > using POST</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T040>T040</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T040>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T043>T043</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T043>failed</a></td></tr>
    <tr><td><a href=#T044>T044</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T044>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T047>T047</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T047>failed</a></td></tr>
    <tr><td><a href=#T048>T048</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T048>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T051>T051</a></td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T051>failed</a></td></tr>
    <tr><td><a href=#T052>T052</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T052>failed</a></td></tr>
    <tr><td><a href=#T053>T053</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T053>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T056>T056</a></td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T056>failed</a></td></tr>
    <tr><td><a href=#T057>T057</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T057>failed</a></td></tr>
    <tr><td><a href=#T058>T058</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T058>failed</a></td></tr></tbody></table>

    - Create container

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T068>T068</a></td><td width=400>   emits websockets-pubsub on the existing container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T068>failed</a></td></tr>
    <tr><td><a href=#T069>T069</a></td><td width=400>   emits websockets-pubsub on the new container</td><td width=55>passed</td><td width=55>pending</td><td width=55><a href=#T069>failed</a></td></tr></tbody></table>

                    WPS results                                 26/4/0/30     0/0/30/30     0/30/0/30     

- wac-results.json                                                

  - MUST

    - Read-Public

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T070>T070</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T071>T071</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T072>T072</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T073>T073</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T074>T074</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T076>T076</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Update

    <table><tbody><tr><td></td><td width=465>Using PUT to append</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T078>T078</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T079>T079</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T080>T080</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T081>T081</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT to overwrite</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T082>T082</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T083>T083</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T084>T084</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T085>T085</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to append</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T086>T086</a></td><td width=400> Is allowed with accessTo Append access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T087>T087</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T088>T088</a></td><td width=400> Is disallowed with accessTo Read+Control access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T089>T089</a></td><td width=400> Is allowed with default Append access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T090>T090</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T091>T091</a></td><td width=400> Is disallowed with default Read+Control access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to overwrite</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T092>T092</a></td><td width=400> Is allowed with accessTo Read+Write access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T093>T093</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T094>T094</a></td><td width=400> Is disallowed with accessTo Write+Control access on resource</td><td width=55><a href=#T094>failed</a></td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T095>T095</a></td><td width=400> Is allowed with default Read+Write access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T096>T096</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T097>T097</a></td><td width=400> Is disallowed with default Write+Control access on parent</td><td width=55><a href=#T097>failed</a></td><td width=55>undefined</td><td width=55>undefined</td></tr></tbody></table>

    - Create

    <table><tbody><tr><td></td><td width=465>Using POST to existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T098>T098</a></td><td width=400> Is allowed with accessTo Append access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T099>T099</a></td><td width=400> Is allowed with accessTo Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T100>T100</a></td><td width=400> Is disallowed otherwise</td><td width=55>passed</td><td width=55><a href=#T100>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT in existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T101>T101</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T102>T102</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T103>T103</a></td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T104>T104</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T104>failed</a></td><td width=55><a href=#T104>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH in existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T105>T105</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55><a href=#T105>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T106>T106</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55><a href=#T106>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T107>T107</a></td><td width=400> is disallowed without default Write</td><td width=55><a href=#T107>failed</a></td><td width=55><a href=#T107>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T108>T108</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T108>failed</a></td><td width=55><a href=#T108>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT in non-existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T109>T109</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T110>T110</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T111>T111</a></td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T112>T112</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T112>failed</a></td><td width=55><a href=#T112>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH in non-existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T113>T113</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55><a href=#T113>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T114>T114</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55><a href=#T114>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T115>T115</a></td><td width=400> is disallowed without default Write</td><td width=55><a href=#T115>failed</a></td><td width=55><a href=#T115>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T116>T116</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T116>failed</a></td><td width=55><a href=#T116>failed</a></td><td width=55>passed</td></tr></tbody></table>

    - ACL doc application

    <table><tbody><tr><td></td><td width=465>No access on container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T117>T117</a></td><td width=400> does not allow GET denied/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T118>T118</a></td><td width=400> does not allow GET denied/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T119>T119</a></td><td width=400> does not allow GET denied/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>ACL doc with acl:accessTo on container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T120>T120</a></td><td width=400> allows GET accessTo/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T121>T121</a></td><td width=400> does not allow GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T122>T122</a></td><td width=400> does not allow GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>ACL doc with acl:default on container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T123>T123</a></td><td width=400> does not allow GET accessTo/</td><td width=55>passed</td><td width=55><a href=#T123>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T124>T124</a></td><td width=400> allows GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T125>T125</a></td><td width=400> allows GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read-LoggedIn

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T126>T126</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T127>T127</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T128>T128</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T129>T129</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T130>T130</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T132>T132</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T134>T134</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T135>T135</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T136>T136</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T137>T137</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T138>T138</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T140>T140</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - From accessTo

    <table><tbody><tr><td></td><td width=465>Public accessTo Read</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T142>T142</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T143>T143</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>

    <table><tbody><tr><td></td><td width=465>Public accessTo Read+Append, Bob accessTo Write</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T144>T144</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T145>T145</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr></tbody></table>

    - From default

    <table><tbody><tr><td></td><td width=465>Public default Read+Append, Bob default Write</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T146>T146</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr>
    <tr><td><a href=#T147>T147</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>undefined</td><td width=55>undefined</td></tr></tbody></table>

    - Alice's storage root

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T148>T148</a></td><td width=400> has an ACL</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Delete

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T149>T149</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T150>T150</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T151>T151</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T152>T152</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read-Public

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T088>T088</a></td><td width=400> Is disallowed to read .acl with Read</td><td width=55>undefined</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T089>T089</a></td><td width=400> Is allowed to read .acl with Control</td><td width=55>undefined</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T098>T098</a></td><td width=400> Is disallowed to read .acl with Read</td><td width=55>undefined</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T099>T099</a></td><td width=400> Is allowed to read .acl with Control</td><td width=55>undefined</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read-LoggedIn

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T108>T108</a></td><td width=400> Is disallowed to read .acl with Read</td><td width=55>undefined</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T109>T109</a></td><td width=400> Is allowed to read .acl with Control</td><td width=55>undefined</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    MUST results                                75/8/0/83     51/12/0/63    63/0/0/63     

### 4. ERROR REPORT

#### <a name=T001>T001</a> MUST > crud-results.json > ["Delete","non-container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950083/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T002>T002</a> MUST > crud-results.json > ["Delete","non-container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950083/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T003>T003</a> WPS > crud-results.json > ["Delete","non-container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615537226873/exists/", "pub http://localhost:3000/solid-crud-tests-1615537226873/exists/"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615537226873/exists/"]

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950083/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T004>T004</a> WPS > crud-results.json > ["Delete","non-container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950083/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T005>T005</a> MUST > crud-results.json > ["Delete","non-empty container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950142/exists/exists.txt failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T006>T006</a> MUST > crud-results.json > ["Delete","non-empty container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950142/exists/exists.txt failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T007>T007</a> WPS > crud-results.json > ["Delete","non-empty container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950142/exists/exists.txt failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T008>T008</a> WPS > crud-results.json > ["Delete","non-empty container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950142/exists/exists.txt failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T009>T009</a> MUST > crud-results.json > ["Delete","empty container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950144/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T010>T010</a> WPS > crud-results.json > ["Delete","empty container"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950144/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T011>T011</a> MUST > crud-results.json > ["Update","Using PUT, overwriting plain text with plain text"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950806/exists/exists1.txt failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T012>T012</a> WPS > crud-results.json > ["Update","Using PUT, overwriting plain text with plain text"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950806/exists/exists1.txt failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T013>T013</a> MUST > crud-results.json > ["Update","Using PUT, overwriting Turtle with Turtle"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950873/exists/exists1.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T014>T014</a> WPS > crud-results.json > ["Update","Using PUT, overwriting Turtle with Turtle"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950873/exists/exists1.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T015>T015</a> MUST > crud-results.json > ["Update","Using PUT (same Turtle content)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950875/exists/exists1.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T016>T016</a> WPS > crud-results.json > ["Update","Using PUT (same Turtle content)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950875/exists/exists1.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T017>T017</a> MUST > crud-results.json > ["Update","Using PATCH to add triple"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539623763/exists/exists3.ttl"}}]

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950877/exists/exists3.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T018>T018</a> WPS > crud-results.json > ["Update","Using PATCH to add triple"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950877/exists/exists3.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T019>T019</a> MUST > crud-results.json > ["Update","Using PATCH to replace triple (same content)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950879/exists/exists4.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T020>T020</a> WPS > crud-results.json > ["Update","Using PATCH to replace triple (same content)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950879/exists/exists4.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T021>T021</a> MUST > crud-results.json > ["Update","Using PATCH to replace triple (present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950880/exists/exists4.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T022>T022</a> WPS > crud-results.json > ["Update","Using PATCH to replace triple (present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950880/exists/exists4.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T023>T023</a> MUST > crud-results.json > ["Update","Using PATCH to replace triple (not present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950882/exists/exists5.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T024>T024</a> WPS > crud-results.json > ["Update","Using PATCH to replace triple (not present)"]

  - CSS

    Error: expect(received).not.toEqual(expected) // deep equality

    

    Expected: not ArrayContaining ["pub http://localhost:3000/solid-crud-tests-1615537228055/exists/exists5.ttl"]

    Received:     ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615537228055/exists/exists5.ttl", "pub http://localhost:3000/solid-crud-tests-1615537228055/exists/exists5.ttl"]

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950882/exists/exists5.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T025>T025</a> MUST > crud-results.json > ["Update","Using PATCH to remove triple (present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950883/exists/exists6.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T026>T026</a> WPS > crud-results.json > ["Update","Using PATCH to remove triple (present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950883/exists/exists6.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T027>T027</a> MUST > crud-results.json > ["Update","Using PATCH to remove triple (not present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950885/exists/exists7.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T028>T028</a> WPS > crud-results.json > ["Update","Using PATCH to remove triple (not present)"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537950885/exists/exists7.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T029>T029</a> MUST > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951426/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T030>T030</a> MUST > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951426/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T031>T031</a> MUST > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951426/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T032>T032</a> MUST > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951426/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T033>T033</a> WPS > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951426/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T034>T034</a> WPS > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951426/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T035>T035</a> MUST > crud-results.json > ["Concurrency","Use PATCH 10 times to add triple to the same resource"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 10

    Received: 0

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951477/exists/resource.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T036>T036</a> MUST > crud-results.json > ["Concurrency","Use PATCH 10 times to add triple to the same resource"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-0"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-1"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-2"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-3"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-4"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-5"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-6"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-7"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-8"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl#triple-9"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539678093/exists/resource.ttl"}}]

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951477/exists/resource.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T037>T037</a> WPS > crud-results.json > ["Concurrency","Use PATCH 10 times to add triple to the same resource"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951477/exists/resource.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T038>T038</a> MUST > crud-results.json > ["Create non-container","in an existing container","using POST"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951887/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T039>T039</a> MUST > crud-results.json > ["Create non-container","in an existing container","using POST"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951887/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T040>T040</a> WPS > crud-results.json > ["Create non-container","in an existing container","using POST"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951887/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T041>T041</a> MUST > crud-results.json > ["Create non-container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951911/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T042>T042</a> MUST > crud-results.json > ["Create non-container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951911/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T043>T043</a> WPS > crud-results.json > ["Create non-container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951911/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T044>T044</a> WPS > crud-results.json > ["Create non-container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951911/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T045>T045</a> MUST > crud-results.json > ["Create non-container","in an existing container","using PATCH"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951920/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T046>T046</a> MUST > crud-results.json > ["Create non-container","in an existing container","using PATCH"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    - Expected  - 1

    + Received  + 0

    

      Array [

        "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539588007/exists/exists.ttl",

    -   "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539588007/exists/new.ttl",

      ]

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951920/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T047>T047</a> WPS > crud-results.json > ["Create non-container","in an existing container","using PATCH"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951920/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T048>T048</a> WPS > crud-results.json > ["Create non-container","in an existing container","using PATCH"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951920/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T049>T049</a> MUST > crud-results.json > ["Create non-container","in a non-existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951922/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T050>T050</a> MUST > crud-results.json > ["Create non-container","in a non-existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951922/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T051>T051</a> WPS > crud-results.json > ["Create non-container","in a non-existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951922/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T052>T052</a> WPS > crud-results.json > ["Create non-container","in a non-existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951922/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T053>T053</a> WPS > crud-results.json > ["Create non-container","in a non-existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951922/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T054>T054</a> MUST > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951925/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T055>T055</a> MUST > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - ESS

    Error: Fetcher: <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615539588036/new/> Not Found

    

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951925/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T056>T056</a> WPS > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951925/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T057>T057</a> WPS > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951925/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T058>T058</a> WPS > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537951925/ failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T059>T059</a> MUST > crud-results.json > ["Alice's storage root"]

  - NSS

    Error: Fetcher: FetchError: ECONNREFUSED request to https://alice.localhost:8443/profile/card failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T060>T060</a> MAY > crud-results.json > ["Alice's pod","Get RDFa","As JSON-LD"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537954050/example.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T061>T061</a> MAY > crud-results.json > ["Alice's pod","Get RDFa","As Turtle"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537954050/example.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T062>T062</a> MUST > crud-results.json > ["Alice's pod","GET Turtle","As JSON-LD"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537954050/example.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T063>T063</a> MUST > crud-results.json > ["Alice's pod","GET Turtle","As Turtle"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537954050/example.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T064>T064</a> MUST > crud-results.json > ["Alice's pod","GET JSON-LD","As JSON-LD"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537954050/example.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T065>T065</a> MUST > crud-results.json > ["Alice's pod","GET JSON-LD","As Turtle"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537954050/example.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T066>T066</a> MUST > crud-results.json > ["Create container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537952728/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T067>T067</a> MUST > crud-results.json > ["Create container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537952728/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T068>T068</a> WPS > crud-results.json > ["Create container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537952728/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T069>T069</a> WPS > crud-results.json > ["Create container","in an existing container","using PUT"]

  - NSS

    FetchError: request to https://alice.localhost:8443/solid-crud-tests-1615537952728/exists/exists.ttl failed, reason: connect ECONNREFUSED 127.0.0.1:8443

    

#### <a name=T094>T094</a> MUST > wac-results.json > ["Update","Using PATCH to overwrite"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

#### <a name=T097>T097</a> MUST > wac-results.json > ["Update","Using PATCH to overwrite"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

#### <a name=T100>T100</a> MUST > wac-results.json > ["Create","Using POST to existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T104>T104</a> MUST > wac-results.json > ["Create","Using PUT in existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T105>T105</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T106>T106</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T107>T107</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T108>T108</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T112>T112</a> MUST > wac-results.json > ["Create","Using PUT in non-existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T113>T113</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T114>T114</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T115>T115</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T116>T116</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T123>T123</a> MUST > wac-results.json > ["ACL doc application","ACL doc with acl:default on container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 200

    

