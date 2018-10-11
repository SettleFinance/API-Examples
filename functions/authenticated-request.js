require('dotenv').config()
const axios = require('axios')
const crypto = require('crypto')

module.exports = (api, endpoint, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      var response = await axios.get(api + '/api/app/AccessToken', {
        headers: {
          'X-Api-Key': process.env.SETTLE_API_KEY
        }
      })

      var accessToken = response.data.accessToken

      var signature = crypto.createHmac('sha256', process.env.SETTLE_API_SECRET)
        .update(accessToken)
        .digest('base64')

      response  = await axios.get(api + endpoint, {
        params,
        headers: {
          'X-Api-Key': process.env.SETTLE_API_KEY,
          'X-Access-Token': accessToken,
          'X-Api-Signature': signature
        }
      })

      resolve(response.data)
    } catch(error) {
      reject(error.response ? error.response.data : error)
    }
  })
}
