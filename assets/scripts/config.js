'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/young-eyrie-49492.git',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
