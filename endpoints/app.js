const RunEndpoints = require('../functions/run-endpoints')

var requests = RunEndpoints(process.env.SETTLE_JSAPI, [
  {
    endpoint: '/api/app/Users'
  }
])

Promise.all(requests).then((result) => {
  // do something after all requests finish
  console.log('DONE')
})
