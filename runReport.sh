#!/bin/bash
cd ../solid-crud-tests
./run-against-nss.sh
./run-against-css.sh
./run-against-ess.sh
cd ../web-access-control-tests
./run-against-nss.sh
./run-against-css.sh
./run-against-ess.sh
cd ../test-suite
node ./test-suite-report.md.js
git status
