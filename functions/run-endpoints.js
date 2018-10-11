const AuthRequest = require('./authenticated-request')

module.exports = (api, requests) => {
  return requests.map((request) => {
    return AuthRequest(api, request.endpoint, request.params || {})
      .then((result) => {
        console.log({
          ...request,
          status: 'OK'
        })

        return {
          ...request,
          result
        }
      })
      .catch((error) => {
        console.log({
          ...request,
          status: 'ERROR',
          error
        })
      })
  })
}
