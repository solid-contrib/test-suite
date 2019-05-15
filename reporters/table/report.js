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

function processWebsocketsPubsubLine (parts) {
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
  if (parts.length < 8) {
    return;
  }
  if (parts[1] === 'tests') {
    processLdpBasicLine(parts)
  } else {
    processWebsocketsPubsubLine(parts)
  }
}

function writeOutput() {
  console.log(['Server', 'LDP Basic', 'Websockets-pub-sub'].map(str => str.padEnd(PAD_LEN)).join('\t'))
  for (let serverName in table) {
    console.log([serverName, table[serverName].ldpBasic, table[serverName].websocketsPubsub].map(str => str.padEnd(PAD_LEN)).join('\t'))
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
    writeOutput()
});