'use strict'

// multi server test report
// uses jest json outputfiles : NSS-crud-results.json NSS-wac-results.json
// from a folder for each server


const fs = require('fs')
const report = {}
const stats = {}

// report structure

// sub-totals are made by levels
const levels = ['SKIP','MUST', 'SHOULD', 'MAY', 'WPS'] //, 'undefined']
const serversRef = ['CSS', 'ESS', 'NSS', 'PHP']
const fileResults = ['crud-results.json', 'wac-results.json', 'webid-provider-tests']
const results = {passed: 0, failed: 0 , pending: 0, total: 0}

// load fileResults by server
let servers = serversRef
for (let server in servers) {

  // test folder
  if (!fs.existsSync(`./${servers[server]}`)) {
    console.log(`no server : ./${servers[server]}`)

    // remove inexistant folders
    delete servers[server]
    console.log(servers)
    continue
  } else { console.log('server folder exists ./' + servers[server])}

  stats[servers[server]] = {}
  let ident = 0
  for (let file in fileResults) {

    // for each test file
    if (!fs.existsSync(`./${servers[server]}/${fileResults[file]}`)) {
      console.log(`no file : ./${servers[server]}/${fileResults[file]}`)
      continue
    }
    const rawData = fs.readFileSync(`./${servers[server]}/${fileResults[file]}`)
    let result = JSON.parse(rawData)
    result.testResults.forEach(item => {
        // for each test item
        item.assertionResults.forEach(item => {
          ident += 1
          
          // build report
          const ancestors = [...item.ancestorTitles]
          const testName = [fileResults[file], ...ancestors, item.title]
          let level = levels.find(level => item.title.split(' ')[0] === level)
          
          // find and remove level, id
          if (level) item.title = item.title.substring(level.length)
          let id = level ? item.title.split(' ')[1] : '' // 'T' + ('00' + ident).slice(-3)
          if (!id) {
            id = 'T' + ('00' + ident).slice(-3)
            item.title = id + ' ' + item.title
          }
          //remove remaining beginning spaces
          item.title = item.title.replace(/\s*/, '')

          // defaukt level to MUST
          if (!level) level = 'MUST'
          report[testName] = report[testName] ? report[testName] : { testfile: fileResults[file] , ancestors, title: item.title , level, id }

          if (!report[testName]['status']) report[testName]['status'] = {}
          report[testName]['status'][servers[server]] = item.status
          if (!report[testName]['errors']) report[testName]['errors'] = {}

          // cleaning non printable, colors chars, source code line
          let error = item.failureMessages.length ? item.failureMessages[0].replace(/[^\x20-\x7E-\n]|\[[0-9]*m/g, "") : ''
          report[testName]['errors'][servers[server]] = error.split('    at ')[0]

          // build stats
          if (!stats[servers[server]][fileResults[file]]) stats[servers[server]][fileResults[file]] = {}
          if (!stats[servers[server]][fileResults[file]]['total']) stats[servers[server]][fileResults[file]]['total'] = {}
          stats[servers[server]][fileResults[file]].total.total = stats[servers[server]][fileResults[file]].total.total ?  (stats[servers[server]][fileResults[file]].total.total + 1) : 1
          stats[servers[server]][fileResults[file]]['total'][item.status] = stats[servers[server]][fileResults[file]]['total'][item.status] ?  (stats[servers[server]][fileResults[file]]['total'][item.status] + 1) : 1
          if (!stats[servers[server]][fileResults[file]][level]) stats[servers[server]][fileResults[file]][level] = {}
          stats[servers[server]][fileResults[file]][level].total = stats[servers[server]][fileResults[file]][level].total ?  (stats[servers[server]][fileResults[file]][level].total + 1) : 1
          stats[servers[server]][fileResults[file]][level][item.status] = stats[servers[server]][fileResults[file]][level][item.status] ?  (stats[servers[server]][fileResults[file]][level][item.status] + 1) : 1
        })
      })
  }
}

// build stats by file
const statsByFile = {}
for (const file in fileResults) {
  if (!statsByFile[[fileResults[file]]]) statsByFile[[fileResults[file]]] = {}
  for (const server in servers) {
    statsByFile[[fileResults[file]]][servers[server]] = stats[servers[server]][fileResults[file]]
  }
}

// report
let ancestor = ''
let ancestors = ''
let testFile = ''
let serverTitle = ''
let levelTitle = ''
/**
 * [{testFile, ancestors, title, level, id}]
 */
let arrayReport = Object.values(report)

// https://stackoverflow.com/questions/2784230/how-do-you-sort-an-array-on-multiple-columns
/**
 * sort array of object by Object keys
 * @param {object} keys
 */
/*Array.prototype.keySort = function(keys) {
  keys = keys || {};

  // via
  // https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
  var obLen = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  var obIx = function(obj, ix){ return Object.keys(obj)[ix]; }

  var keySort = function(a, b, d) {
    d = d !== null ? d : 1;
    // a = a.toLowerCase(); // this breaks numbers
    // b = b.toLowerCase();
    if (a == b) return 0;
    return a > b ? 1 * d : -1 * d;
  };

  var KL = obLen(keys);

  if (!KL) return this.sort(keySort);

  for ( var k in keys) {
    // asc unless desc or skip
    keys[k] = 
            keys[k] == 'desc' || keys[k] == -1  ? -1 
          : (keys[k] == 'skip' || keys[k] === 0 ? 0 
          : 1);
  }

  this.sort(function(a, b) {
    var sorted = 0, ix = 0;
    while (sorted === 0 && ix < KL) {
      var k = obIx(keys, ix);
      if (k) {
        var dir = keys[k];
        sorted = keySort(a[k], b[k], dir);
        ix++;
      }
    }
    return sorted;
  });
  return this;
}; */
  
// https://bithacker.dev/javascript-object-multi-property-sort
function sortByKeys(array, sortBy) {
  /* let sortBy = [{
    prop:'testfile',
    direction: 1
  },{
    prop:'level',
    direction: 1
  }]; */
  return array.sort(function(a,b) {
    let i = 0, result = 0;
    while(i < sortBy.length && result === 0) {
      result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
      i++;
    }
    return result; 
  })
}
// }
// sort array of tests
const sortBy = [{
  prop:'testfile',
  direction: 1
},{
  prop:'level',
  direction: 1
}]

let sortedReport = sortByKeys(arrayReport, sortBy)
// let sortedReport = arrayReport.keySort({ testfile: 'asc', level: 'asc'})
// sortedReport.map(test => console.log(test.testfile + ' ' + test.level))

// remove server with no result content
servers = serversRef
for (let server in serversRef) {
  if (!stats[serversRef[server]] || !Object.keys(stats[serversRef[server]]).length) {
    delete servers[server]
  }
}

// header
servers.forEach(server => { serverTitle = serverTitle + setStringLength(server, 14) })
let serversTitle = serverTitle
let reportContent = `\n## ${setStringLength('SOLID-TEST-SUITE REPORT', 60+4)}`

// summary by file
reportContent = reportContent + '\n\n### 1. SUMMARY by testFile'
summary(fileResults, servers)

// summary by server
reportContent = reportContent + '\n\n### 2. SUMMARY by server'
summary(servers, fileResults)

// report unit tests
reportContent = reportContent + '\n\n### 3. UNIT TESTS by testFile and level'
// sortedReport = arrayReport.keySort({ testFile: 'asc', level: 'asc'})
let tableBegin = true
sortedReport.forEach(test => {

  // break title on testFile
  if (testFile !== test.testfile) {
    if (testFile !== '' && !tableBegin) {
      reportContent = reportContent + '</tbody></table>'
      tableBegin = true
    }
    if (testFile !== '') reportContent = reportContent + `\n\n${setStringLength('', 20)}${setStringLength(levelTitle + ' results', 44)}${totals(levelTitle)}`
      ancestor = ''
      ancestors = ''
      levelTitle = ''      
      testFile = test.testfile
      reportContent = reportContent +`\n\n- ${setStringLength(testFile, 60 + 4)}` //${serversTitle}`
    }

    // break title on level
    if (levelTitle !== test.level) {
      if (levelTitle !== '' && !tableBegin) {
        reportContent = reportContent + '</tbody></table>'
        tableBegin = true
      }
  
      // print totals, init level sub-totals
      if (levelTitle !== '') {
        reportContent = reportContent + `\n\n${setStringLength('', 20)}${setStringLength(levelTitle + ' results', 44)}${totals(levelTitle)}`
        tableBegin = true
      }
      levelTitle = test.level
      ancestor = ''
      reportContent = reportContent + `\n\n  - ${levelTitle}`
    }

    // break title on ancestors[0]
    if (ancestor !== test.ancestors[0]) {
      if (!tableBegin) {
        reportContent = reportContent + '</tbody></table>'
        tableBegin = true
      }
      ancestor = test.ancestors[0]
      reportContent = reportContent +'\n\n    - ' + ancestor
      if (test.ancestors.length === 1) {
        reportContent = reportContent + `\n\n    <table><tbody>`
        tableBegin = false
        reportContent = reportContent +`<tr><td></td><td width=465> </td>`
        servers.forEach(server => reportContent = reportContent + `<td width=80>${server}</td>`)
        reportContent = reportContent + '</tr>'

      }
    }

    // begin table
    if (test.ancestors.length !== 1 && ancestors !== test.ancestors.slice(1).join(' > ')) { // toString()) {
      ancestors = test.ancestors.slice(1).join(' > ')
      // if (tableBegin) {
        reportContent = reportContent + `\n\n    <table><tbody>`
        tableBegin = false
        reportContent = reportContent +`<tr><td></td><td width=465>${ancestors}</td>`
        servers.forEach(server => reportContent = reportContent + `<td width=80>${server}</td>`)
        reportContent = reportContent + '</tr>'
      // }
    }
    let result = ''
    servers.   forEach(server => {
      test.status[server] ? '' : test.status[server]
      result = result + setStringLength(test.status[server], 14)
    })
    if (tableBegin)  {
      tableBegin = false
    }
    reportContent = reportContent + '\n    ' + table(test) // setStringLength(test.title, 60) + result
  })

reportContent = reportContent + '</tbody></table>'
reportContent = reportContent + `\n\n${setStringLength('', 20)}${setStringLength(levelTitle + ' results', 44)}${totals(levelTitle)}`

// report errors by testItem
reportContent = reportContent + '\n\n### 4. ERROR REPORT\n'
//sortedReport = arrayReport.keySort({ id: 'asc'})
sortedReport = sortByKeys(arrayReport, [{ prop: 'id', direction: 1 }])

sortedReport.forEach(test => {
  let ident = ''
  Object.keys(test.errors).forEach(server => {
    if (test.errors[server]) {
      if (ident === '') {
        reportContent = reportContent + `\n#### <a name=${test.id}>${test.id}</a> ${test.level} > ${test.testfile} > ${JSON.stringify(test.ancestors)}\n`
        ident = test.id
      }
      reportContent = reportContent + '\n  - ' + server + '\n'
      let lines = test.errors[server].split('\n')
      lines.map(line => reportContent = reportContent + '\n    ' + line + '\n')
    }
  })
})

// print
console.log(reportContent)
fs.writeFile('test-suite-report.md', reportContent + '\n', function(err) {
  if(err) console.log(err)
})

// format table
function table (testItem, firstLine = '') {
  let test = `<tr><td><a href=#${testItem.id}>${testItem.id}</a></td><td width=400>${testItem.title.split(testItem.id + '')[1]}</td>`
  servers.forEach(server => {
    let status = testItem.status[server] === 'failed' ? `<a href=#${testItem.id}>${testItem.status[server]}</a>` : `${testItem.status[server]}`
    test = test + `<td width=55>${status}</td>` //  ? '' : testItem.status[server]}</td>`)
    })
    test = test + '</tr>'
  return test
}

// format output
function setStringLength (item, length) {
  if (!item) item = ''
  let itemString = item.substring(0, length-1)
  return  itemString + ' '.repeat(length - itemString.length)
}

// extract sub-totals by level
function totals (levelTitle) {
  let sums = ''
  servers.forEach(server => {
    let res = ''
    let totals = [0, 0, 0, 0]
    if (stats[server][testFile] && stats[server][testFile][levelTitle]) {
      stats[server][testFile][levelTitle] = Object.assign({}, results, stats[server][testFile][levelTitle])
      totals = Object.values(stats[server][testFile][levelTitle])
      reportContent = reportContent + '\n' + JSON.stringify(totals)
    }

    totals.forEach( item => {
      res = res === '' ? `${item.toString()}` : `${res}/${item.toString()}`
    })
    sums = sums + setStringLength(res, 14)
  })
  return sums
}

// summary by which ever order of : servers, fileResults
function summary (item1, item2) {
  item1.forEach(item => {
    let itemHeader = ''
    item2.forEach(subItem => {
      let server, file
      if (servers.find(server => item === server)) {
        server = item
        file = subItem
      } else {
        server = subItem
        file = item
      }
      if (stats[server]) {
        if (stats[server][file]) {
          if (itemHeader === '') {
            reportContent = reportContent +'\n\n- ' + item + '\n'
            itemHeader = item
          }
          reportContent = reportContent + '\n' + setStringLength('  ' + subItem, 20) + '\n'
          Object.keys(stats[server][file]).sort().forEach(level => {
            stats[server][file][level] = Object.assign({}, results, stats[server][file][level])
            reportContent = reportContent +'\n       ' + setStringLength('  ' + level, 14) + JSON.stringify(stats[server][file][level])
          })
        }
      }
    })
  })
}
