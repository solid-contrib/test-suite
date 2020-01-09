import fetch from 'node-fetch'
import WebSocket from 'ws'

let wsClient: WebSocket
let received: Promise<string>

beforeEach(async () => {
  wsClient = new WebSocket('ws://server:8080')
  received = new Promise((resolve) => {
    wsClient.on('message', function incoming (data) {
      resolve(data.toString())
    })
  })
  await new Promise((resolve) => {
    wsClient.on('open', function open () {
      wsClient.send('sub http://server:8080/asdf/')
      resolve(undefined)
    })
  })
})
afterEach(() => {
  wsClient.close()
})

test('publishes a change event', async () => {
  await fetch('http://server:8080/asdf/test.txt', {
    method: 'PUT',
    body:  'hello',
    headers: {
      'if-none-match': '*'
    }
  })
  const notif = await received
  expect(notif).toEqual('pub http://server:8080/asdf/test.txt')
})
