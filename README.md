# SETTLE EXAMPLES
This repo is intended to provide useful examples and re-usable code (Node.js) for developers making apps on Settle.

## Setup
Remember that for some API calls your app will need to be given specific permissions:

![Alt text](/docs/assets/img/app-permission.png?raw=true)

In order to run any of the code examples found here you'll need to update the .env file with your own API key and secret:
```
SETTLE_API_KEY    = "API KEY HERE"
SETTLE_API_SECRET = "API SECRET HERE"
SETTLE_JSAPI      = "https://jsapi.settle.finance"
SETTLE_DBAPI      = "https://dbapi.settle.finance"
```

Install node modules:
```
npm install
```

To test that things are working try running the app endpoints (there's just one for now):
```
node endpoints/app
```

If you see the 'OK' status logged for each request that means it's working.

## Endpoints
There are 3 different endpoint sections, scripts are available to test each of them:
```
node endpoints/app
node endpoints/portfolio-tracker
node endpoints/price-feed
```

Depending on what your app needs to do, you may want to use the test scripts directly as a starting point. If you need finer control of requests or would like to develop your own completely custom solution then check out the functions folder; [authenticated-request.js](https://github.com/SettleFinance/Portfolio-API-Example/blob/master/functions/authenticated-request.js) will provide a basic example of how to make endpoint requests following the basic auth requirements. 
