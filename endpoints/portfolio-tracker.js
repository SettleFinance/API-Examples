const RunEndpoints = require('../functions/run-endpoints')

var user_id = 'USER ID HERE'

var requests = RunEndpoints(process.env.SETTLE_JSAPI, [
  {
    endpoint: '/api/public/PortfolioTracker/Summary',
    params: {
      user_id
    }
  },
  {
    endpoint: '/api/public/PortfolioTracker/Holdings',
    params: {
      user_id
    }
  },
  {
    endpoint: '/api/public/PortfolioTracker/HoldingsWithTrades',
    params: {
      user_id
    }
  },
  {
    endpoint: '/api/public/PortfolioTracker/Trades',
    params: {
      user_id
    }
  },
  {
    endpoint: '/api/public/PortfolioTracker/Exchanges',
    params: {
      user_id
    }
  },
  {
    endpoint: '/api/public/PortfolioTracker/BalanceHistory',
    params: {
      user_id
    }
  }
])

Promise.all(requests).then((result) => {
  // do something after all requests finish
  console.log('DONE')
})
