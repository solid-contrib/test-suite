
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
         MUST        {"passed":30,"failed":7,"pending":0,"total":37}
         WPS         {"passed":0,"failed":0,"pending":30,"total":30}
         total       {"passed":30,"failed":7,"pending":32,"total":69}
  NSS               

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         MUST        {"passed":36,"failed":1,"pending":0,"total":37}
         WPS         {"passed":28,"failed":2,"pending":0,"total":30}
         total       {"passed":66,"failed":3,"pending":0,"total":69}

- wac-results.json

  CSS               

         MUST        {"passed":84,"failed":6,"pending":3,"total":93}
         total       {"passed":84,"failed":6,"pending":3,"total":93}
  ESS               

         MUST        {"passed":75,"failed":15,"pending":3,"total":93}
         total       {"passed":75,"failed":15,"pending":3,"total":93}
  NSS               

         MUST        {"passed":90,"failed":0,"pending":3,"total":93}
         total       {"passed":90,"failed":0,"pending":3,"total":93}

### 2. SUMMARY by server

- CSS

  crud-results.json 

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         MUST        {"passed":36,"failed":1,"pending":0,"total":37}
         WPS         {"passed":26,"failed":4,"pending":0,"total":30}
         total       {"passed":64,"failed":5,"pending":0,"total":69}
  wac-results.json  

         MUST        {"passed":84,"failed":6,"pending":3,"total":93}
         total       {"passed":84,"failed":6,"pending":3,"total":93}

- ESS

  crud-results.json 

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         MUST        {"passed":30,"failed":7,"pending":0,"total":37}
         WPS         {"passed":0,"failed":0,"pending":30,"total":30}
         total       {"passed":30,"failed":7,"pending":32,"total":69}
  wac-results.json  

         MUST        {"passed":75,"failed":15,"pending":3,"total":93}
         total       {"passed":75,"failed":15,"pending":3,"total":93}

- NSS

  crud-results.json 

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         MUST        {"passed":36,"failed":1,"pending":0,"total":37}
         WPS         {"passed":28,"failed":2,"pending":0,"total":30}
         total       {"passed":66,"failed":3,"pending":0,"total":69}
  wac-results.json  

         MUST        {"passed":90,"failed":0,"pending":3,"total":93}
         total       {"passed":90,"failed":0,"pending":3,"total":93}

### 3. UNIT TESTS by testFile and level

- crud-results.json                                               

  - MAY

    - Alice's pod

    <table><tbody><tr><td></td><td width=465>Get RDFa > As JSON-LD</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T064>T064</a></td><td width=400>   Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Get RDFa > As Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T065>T065</a></td><td width=400>   Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

                    MAY results                                 2/0/0/2       0/0/2/2       2/0/0/2       

  - MUST

    - Create non-container

    <table><tbody><tr><td></td><td width=465>in an existing container > using POST</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T001>T001</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T002>T002</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T004>T004</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T005>T005</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T008>T008</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55><a href=#T008>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T009>T009</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55><a href=#T009>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T012>T012</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T013>T013</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T017>T017</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55><a href=#T017>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T018>T018</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55><a href=#T018>failed</a></td><td width=55>passed</td></tr></tbody></table>

    - Update

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting plain text with plain text</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T022>T022</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting Turtle with Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T024>T024</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT (same Turtle content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T026>T026</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to add triple</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T028>T028</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55><a href=#T028>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (same content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T030>T030</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T032>T032</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T034>T034</a></td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T036>T036</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T038>T038</a></td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Concurrency

    <table><tbody><tr><td></td><td width=465>Try to create the same resource, using PUT 10 times</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T040>T040</a></td><td width=400> succeeds exactly once</td><td width=55><a href=#T040>failed</a></td><td width=55>passed</td><td width=55><a href=#T040>failed</a></td></tr>
    <tr><td><a href=#T041>T041</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T042>T042</a></td><td width=400> body was set by the successful request</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T043>T043</a></td><td width=400> adds the resource in the container listing exactly once</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Use PATCH 10 times to add triple to the same resource</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T046>T046</a></td><td width=400> succeeds 10 times</td><td width=55>passed</td><td width=55><a href=#T046>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T047>T047</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55><a href=#T047>failed</a></td><td width=55>passed</td></tr></tbody></table>

    - Alice's storage root

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T049>T049</a></td><td width=400> is an ldp BasicContainer</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Delete

    <table><tbody><tr><td></td><td width=465>non-container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T050>T050</a></td><td width=400> deletes the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T051>T051</a></td><td width=400> removes the resource from the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>non-empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T054>T054</a></td><td width=400> leaves the container with the resource in it</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T055>T055</a></td><td width=400> leaves the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T058>T058</a></td><td width=400> deletes the container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Create container

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T060>T060</a></td><td width=400> creates the container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T061>T061</a></td><td width=400> adds the resource in the existing container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Alice's pod

    <table><tbody><tr><td></td><td width=465>GET Turtle > As JSON-LD</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T066>T066</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>GET Turtle > As Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T067>T067</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>GET JSON-LD > As JSON-LD</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T068>T068</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>GET JSON-LD > As Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T069>T069</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    MUST results                                36/1/0/37     30/7/0/37     36/1/0/37     

  - WPS

    - Create non-container

    <table><tbody><tr><td></td><td width=465>in an existing container > using POST</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T003>T003</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T006>T006</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T007>T007</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in an existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T010>T010</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T011>T011</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T014>T014</a></td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T015>T015</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T016>T016</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>in a non-existing container > using PATCH</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T019>T019</a></td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T020>T020</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T021>T021</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Update

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting plain text with plain text</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T023>T023</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT, overwriting Turtle with Turtle</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T025>T025</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT (same Turtle content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T027>T027</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to add triple</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T029>T029</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (same content)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T031>T031</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T033>T033</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to replace triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T035>T035</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55><a href=#T035>failed</a></td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T037>T037</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to remove triple (not present)</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T039>T039</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Concurrency

    <table><tbody><tr><td></td><td width=465>Try to create the same resource, using PUT 10 times</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T044>T044</a></td><td width=400>   emits websockets-pubsub on the container exactly once</td><td width=55><a href=#T044>failed</a></td><td width=55>pending</td><td width=55><a href=#T044>failed</a></td></tr>
    <tr><td><a href=#T045>T045</a></td><td width=400>   emits websockets-pubsub on the resource exactly once</td><td width=55><a href=#T045>failed</a></td><td width=55>pending</td><td width=55><a href=#T045>failed</a></td></tr>

    <table><tbody><tr><td></td><td width=465>Use PATCH 10 times to add triple to the same resource</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T048>T048</a></td><td width=400>   emits websockets-pubsub on the resource 10 times</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Delete

    <table><tbody><tr><td></td><td width=465>non-container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T052>T052</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55><a href=#T052>failed</a></td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T053>T053</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>non-empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T056>T056</a></td><td width=400>   does not emit websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T057>T057</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>empty container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T059>T059</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Create container

    <table><tbody><tr><td></td><td width=465>in an existing container > using PUT</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T062>T062</a></td><td width=400>   emits websockets-pubsub on the existing container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr>
    <tr><td><a href=#T063>T063</a></td><td width=400>   emits websockets-pubsub on the new container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

                    WPS results                                 26/4/0/30     0/0/30/30     28/2/0/30     

- wac-results.json                                                

  - MUST

    - From accessTo

    <table><tbody><tr><td></td><td width=465>Public accessTo Read</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T070>T070</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T071>T071</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Public accessTo Read+Append, Bob accessTo Write</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T072>T072</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T073>T073</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - From default

    <table><tbody><tr><td></td><td width=465>Public default Read+Append, Bob default Write</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T074>T074</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T075>T075</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T076>T076</a></td><td width=400> Shows the Link header containing the aclDocUrl to Alice</td><td width=55>passed</td><td width=55><a href=#T076>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T077>T077</a></td><td width=400> Does not show a Link header containing the aclDocUrl to the public</td><td width=55>pending</td><td width=55>pending</td><td width=55>pending</td></tr></tbody></table>

    - Create

    <table><tbody><tr><td></td><td width=465>Using POST to existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T078>T078</a></td><td width=400> Is allowed with accessTo Append access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T079>T079</a></td><td width=400> Is allowed with accessTo Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T080>T080</a></td><td width=400> Is disallowed otherwise</td><td width=55>passed</td><td width=55><a href=#T080>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT in existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T081>T081</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T082>T082</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T083>T083</a></td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T084>T084</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T084>failed</a></td><td width=55><a href=#T084>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH in existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T085>T085</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55><a href=#T085>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T086>T086</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55><a href=#T086>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T087>T087</a></td><td width=400> is disallowed without default Write</td><td width=55><a href=#T087>failed</a></td><td width=55><a href=#T087>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T088>T088</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T088>failed</a></td><td width=55><a href=#T088>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT in non-existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T089>T089</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T090>T090</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T091>T091</a></td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T092>T092</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T092>failed</a></td><td width=55><a href=#T092>failed</a></td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH in non-existing container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T093>T093</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55><a href=#T093>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T094>T094</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55><a href=#T094>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T095>T095</a></td><td width=400> is disallowed without default Write</td><td width=55><a href=#T095>failed</a></td><td width=55><a href=#T095>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T096>T096</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55><a href=#T096>failed</a></td><td width=55><a href=#T096>failed</a></td><td width=55>passed</td></tr></tbody></table>

    - Update

    <table><tbody><tr><td></td><td width=465>Using PUT to append</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T097>T097</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T098>T098</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T099>T099</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T100>T100</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PUT to overwrite</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T101>T101</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T102>T102</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T103>T103</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T104>T104</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to append</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T105>T105</a></td><td width=400> Is allowed with accessTo Append access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T106>T106</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55><a href=#T106>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T107>T107</a></td><td width=400> Is disallowed with accessTo Read+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T108>T108</a></td><td width=400> Is allowed with default Append access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T109>T109</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55><a href=#T109>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T110>T110</a></td><td width=400> Is disallowed with default Read+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>Using PATCH to overwrite</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T111>T111</a></td><td width=400> Is allowed with accessTo Read+Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T112>T112</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T113>T113</a></td><td width=400> Is disallowed with accessTo Write+Control access on resource</td><td width=55>pending</td><td width=55>pending</td><td width=55>pending</td></tr>
    <tr><td><a href=#T114>T114</a></td><td width=400> Is allowed with default Read+Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T115>T115</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T116>T116</a></td><td width=400> Is disallowed with default Write+Control access on parent</td><td width=55>pending</td><td width=55>pending</td><td width=55>pending</td></tr>

    <table><tbody><tr><td></td><td width=465>Update acl file</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T117>T117</a></td><td width=400> Is disallowed with Read+Write</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T118>T118</a></td><td width=400> Is allowed with Control</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read-LoggedIn

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T119>T119</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T120>T120</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T121>T121</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T122>T122</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T123>T123</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T125>T125</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T127>T127</a></td><td width=400> Is disallowed to read .acl with Read</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T128>T128</a></td><td width=400> Is allowed to read .acl with Control</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - ACL doc application

    <table><tbody><tr><td></td><td width=465>No access on container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T129>T129</a></td><td width=400> does not allow GET denied/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T130>T130</a></td><td width=400> does not allow GET denied/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T131>T131</a></td><td width=400> does not allow GET denied/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>ACL doc with acl:accessTo on container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T132>T132</a></td><td width=400> allows GET accessTo/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T133>T133</a></td><td width=400> does not allow GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T134>T134</a></td><td width=400> does not allow GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>

    <table><tbody><tr><td></td><td width=465>ACL doc with acl:default on container</td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T135>T135</a></td><td width=400> does not allow GET accessTo/</td><td width=55>passed</td><td width=55><a href=#T135>failed</a></td><td width=55>passed</td></tr>
    <tr><td><a href=#T136>T136</a></td><td width=400> allows GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T137>T137</a></td><td width=400> allows GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T138>T138</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T139>T139</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T140>T140</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T141>T141</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T142>T142</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T144>T144</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T146>T146</a></td><td width=400> Is disallowed to read .acl with Read</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T147>T147</a></td><td width=400> Is allowed to read .acl with Control</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Read-Public

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T148>T148</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T149>T149</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T150>T150</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T151>T151</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T152>T152</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T154>T154</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T156>T156</a></td><td width=400> Is disallowed to read .acl with Read</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T157>T157</a></td><td width=400> Is allowed to read .acl with Control</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Delete

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T158>T158</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T159>T159</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T160>T160</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr>
    <tr><td><a href=#T161>T161</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Alice's storage root

    <table><tbody><tr><td></td><td width=465> </td><td width=80>CSS</td><td width=80>ESS</td><td width=80>NSS</td></tr>
    <tr><td><a href=#T162>T162</a></td><td width=400> has an ACL</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    MUST results                                84/6/3/93     75/15/3/93    90/0/3/93     

### 4. ERROR REPORT

#### <a name=T008>T008</a> MUST > crud-results.json > ["Create non-container","in an existing container","using PATCH"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T009>T009</a> MUST > crud-results.json > ["Create non-container","in an existing container","using PATCH"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    - Expected  - 1

    + Received  + 0

    

      Array [

        "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737444066/exists/exists.ttl",

    -   "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737444066/exists/new.ttl",

      ]

    

#### <a name=T017>T017</a> MUST > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T018>T018</a> MUST > crud-results.json > ["Create non-container","in a non-existing container","using PATCH"]

  - ESS

    Error: Fetcher: <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737444074/new/> Not Found

    

#### <a name=T028>T028</a> MUST > crud-results.json > ["Update","Using PATCH to add triple"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737471282/exists/exists3.ttl#hello"}}]

    

#### <a name=T035>T035</a> WPS > crud-results.json > ["Update","Using PATCH to replace triple (not present)"]

  - CSS

    Error: expect(received).not.toEqual(expected) // deep equality

    

    Expected: not ArrayContaining ["pub http://localhost:3000/solid-crud-tests-1615739594573/exists/exists5.ttl"]

    Received:     ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615739594573/exists/exists5.ttl", "pub http://localhost:3000/solid-crud-tests-1615739594573/exists/exists5.ttl"]

    

#### <a name=T040>T040</a> MUST > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

#### <a name=T044>T044</a> WPS > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

#### <a name=T045>T045</a> WPS > crud-results.json > ["Concurrency","Try to create the same resource, using PUT 10 times"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 1

    Received: 10

    

#### <a name=T046>T046</a> MUST > crud-results.json > ["Concurrency","Use PATCH 10 times to add triple to the same resource"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 10

    Received: 0

    

#### <a name=T047>T047</a> MUST > crud-results.json > ["Concurrency","Use PATCH 10 times to add triple to the same resource"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-0"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-1"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-2"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-3"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-4"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-5"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-6"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-7"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-8"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#successfully"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#added"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl#triple-9"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615737427185/exists/resource.ttl"}}]

    

#### <a name=T052>T052</a> WPS > crud-results.json > ["Delete","non-container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615739615460/exists/", "pub http://localhost:3000/solid-crud-tests-1615739615460/exists/"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615739615460/exists/"]

    

#### <a name=T076>T076</a> MUST > wac-results.json > ["From default","Public default Read+Append, Bob default Write"]

  - ESS

    Error: expect(received).toMatch(expected)

    

    Expected substring: "test.txt?ext=acl"

    Received string:    "<https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/web-access-control-tests-1615736866237/3/publicReadBobWrite/test.txt>; rel=\"canonical\", <http://www.w3.org/ns/ldp#Resource>; rel=\"type\", <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/web-access-control-tests-1615736866237/3/publicReadBobWrite/test.txt>; rel=\"original timegate\", <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/web-access-control-tests-1615736866237/3/publicReadBobWrite/test.txt?ext=description>; rel=\"describedby\", <http://www.w3.org/ns/ldp#NonRDFSource>; rel=\"type\", <https://pod-compat.inrupt.com/solidtestsuite/profile/card#me>; rel=\"http://www.w3.org/ns/solid/terms#podOwner\", <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/web-access-control-tests-1615736866237/3/publicReadBobWrite/test.txt>; rel=\"self\", </solidtestsuite/solidtestsuite/web-access-control-tests-1615736866237/3/publicReadBobWrite/test.txt?ext=shex>; rel=\"http://www.w3.org/ns/shex#Schema\""

    

#### <a name=T080>T080</a> MUST > wac-results.json > ["Create","Using POST to existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T084>T084</a> MUST > wac-results.json > ["Create","Using PUT in existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T085>T085</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T086>T086</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T087>T087</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T088>T088</a> MUST > wac-results.json > ["Create","Using PATCH in existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T092>T092</a> MUST > wac-results.json > ["Create","Using PUT in non-existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T093>T093</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T094>T094</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T095>T095</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T096>T096</a> MUST > wac-results.json > ["Create","Using PATCH in non-existing container"]

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name=T106>T106</a> MUST > wac-results.json > ["Update","Using PATCH to append"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T109>T109</a> MUST > wac-results.json > ["Update","Using PATCH to append"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name=T135>T135</a> MUST > wac-results.json > ["ACL doc application","ACL doc with acl:default on container"]

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 200

    

