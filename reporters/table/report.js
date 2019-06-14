// reports/gold-ldp-basic.txt:Total tests run: 90, Failures: 20, Skips: 69
// reports/gold-websockets-pubsub.txt:Tests:       1 failed, 1 total
// reports/gold.txt:Total tests run: 90, Failures: 20, Skips: 69
// reports/inrupt-pod-server-ldp-basic.txt:Total tests run: 90, Failures: 16, Skips: 49
// reports/inrupt-pod-server-websockets-pubsub.txt:Tests:       1 passed, 1 total
// reports/inrupt-pod-server.txt:Total tests run: 90, Failures: 16, Skips: 49
// reports/node-solid-server-ldp-basic.txt:Total tests run: 90, Failures: 28, Skips: 47
// reports/node-solid-server-websockets-pubsub.txt:Tests:       1 failed, 1 total
// reports/node-solid-server.txt:Total tests run: 90, Failures: 28, Skips: 47
// reports/trellis-ldp-basic.txt:Total tests run: 90, Failures: 9, Skips: 29
// reports/trellis-websockets-pubsub.txt:Tests:       1 failed, 1 total
// reports/trellis.txt:Total tests run: 90, Failures: 9, Skips: 29

const PAD_LEN = 20
const table = {};
const numPerlBasedOkay = {};

function processPerlBasedLine (parts) {
  const serverNameRegex = new RegExp('reports/(.+?)-perl-based.txt')
  const serverName = serverNameRegex.exec(parts[0])[1]
  const totalNumberRegex = new RegExp('^Tests=([0-9]+),$')
  var totalNumber = 0;
  var totalNumberMatch = totalNumberRegex.exec(parts[1])
  if (!table[serverName]) { // The next few if sentences look bizarre, I don't know how to do without them
    table[serverName] = {}
  }
  if (!table[serverName]['perlBased']) {
    table[serverName]['perlBased'] = {}
  }
  if (!table[serverName]['perlBased']['totalNumber']) {
    table[serverName]['perlBased']['totalNumber'] = 0
  }
  if (!table[serverName]['perlBased']['failedNumber']) {
    table[serverName]['perlBased']['failedNumber'] = 0
  }
//  console.log(serverName, parts, totalNumberMatch)
  if (totalNumberMatch) {
//    console.log("FOOO " + totalNumberMatch[1])
    table[serverName].perlBased.totalNumber = parseInt(totalNumberMatch[1])
  }

  for (var i = 4; i < parts.length; i++) {
    if (parts[i] === 'Failed:') { // We don't know where in the array the failed number of tests will be, just not early. Might always be the two last?
      table[serverName].perlBased.failedNumber += parseInt(parts[i+1])
    }
  }
//  console.log(serverName, table[serverName])
  // [ 'reports/trellis-perl-based.txt:tests/basic.t', '(Wstat:', '1024',
  //   'Tests:', '6', 'Failed:',
  //   '4)' ]
/*  if (parts[4] === 'Failed:') {
    const serverName = parts[0].substring('reports/'.length, parts[0].length - '-perl-based.txt:tests/basic.t'.length)
    // console.log('tests', serverName, parts[4])
    const result = `${numPerlBasedOkay[serverName]}/${parts[4]}`
    table[serverName].perlBased = result;
    return
  }*/ 



}

function processWebsocketsPubsubLine (parts) {
  // console.log('process websockets-pubsub line', parts)
  // reports/gold-websockets-pubsub.txt:Tests:       1 failed, 1 total
  // [ 'reports/gold-websockets-pubsub.txt:Tests:', '', '',
  //   '', '', '',
  //   '', '1', 'failed,', '1', 'total' ]
  let result;
  if (parts[8] === 'failed,') {
    result = '0/1';
  } else if (parts[8] === 'passed,') {
    result = '1/1';
  }
  const serverName = parts[0].substring('reports/'.length, parts[0].length - '-websockets-pubsub.txt:Tests:'.length)
  // console.log(parts[0], 'reports/'.length, parts[0].length, '-websockets-pubsub.txt:Tests:'.length, serverName)
  if (!table[serverName]) {
    table[serverName] = {};
  }
  table[serverName].websocketsPubsub = result;
}
function processLdpBasicLine (parts) {
  //  console.log('process ldp-basic line', parts)
  // reports/gold-ldp-basic.txt:Total tests run: 90, Failures: 20, Skips: 69
  // [ 'reports/gold-ldp-basic.txt:Total', 'tests', 'run:',
  //   '90,', 'Failures:', '20,',
  //   'Skips:', '69' ]
  const total = parseInt(parts[3])
  const failures = parseInt(parts[5])
  const skips = parseInt(parts[7])
  const result = `${total - failures - skips}/${total}`
  // console.log(parts[3], total, parts[5], failures, parts[7], skips, result)
  const serverName = parts[0].substring('reports/'.length, parts[0].length - '-ldp-basic.txt:Total'.length)
  // console.log(parts[0], 'reports/'.length, parts[0].length, '-ldp-basic.txt:Total'.length, serverName)
  if (!table[serverName]) {
    table[serverName] = {};
  }
  table[serverName].ldpBasic = result;
}

function processLine (line) {
  const parts = line.split(' ');
  if (line.indexOf('ldp-basic') !== -1) {
    if (parts.length < 8) {
      return;
    }
    processLdpBasicLine(parts)
  } else if (line.indexOf('perl-based') !== -1) {
    processPerlBasedLine(parts)
  } else {
    if (parts.length < 8) {
      return;
    }
    processWebsocketsPubsubLine(parts)
  }
}

function writeOutput() {
//  console.log(['Server', 'LDP Basic', 'Websockets-pub-sub', 'Perl-based'].map(str => str.padEnd(PAD_LEN)).join('\t'))
  for (let serverName in table) {
    // console.log(table[serverName], serverName)
//    console.log([serverName, table[serverName].ldpBasic, table[serverName].websocketsPubsub, table[serverName].perlBased].map(str => str.padEnd(PAD_LEN)).join('\t'))
  }
}


// ...
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lingeringLine = "";

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");

    lines[0] = lingeringLine + lines[0];
    lingeringLine = lines.pop();

    lines.forEach(processLine);
});

process.stdin.on('end', function() {
  processLine(lingeringLine);
  console.log(table)
    writeOutput()
});
