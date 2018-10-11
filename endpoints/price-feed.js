const RunEndpoints = require('../functions/run-endpoints')

var requests = RunEndpoints(process.env.SETTLE_DBAPI, [
  {
    endpoint: '/api/public/price-history',
    params: {
      id: 1, // Bitcoin,
      resolution: 'minutes'
    }
  },
  {
    endpoint: '/api/public/ticker',
    params: {
      id: '1,1027' // Bitcoin & Ethereum
    }
  },
  {
    endpoint: '/api/public/info',
    params: {
      id: '1,1027' // Bitcoin & Ethereum
    }
  }
])

Promise.all(requests).then((result) => {
  // do something after all requests finish
  console.log('DONE')
})
