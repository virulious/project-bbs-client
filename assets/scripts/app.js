'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // Event listener for Sign Up:
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Event listener for Sign in:
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Event listener for Change Password:
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Event listener for Sign Out:
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Event listener for Index Post:
  $('#index-post').on('click', authEvents.onIndexPost)
})
