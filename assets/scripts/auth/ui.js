'use strict'

const store = require('../store')
const indexPostTemplate = require('../templates/post-listing.handlebars')

const messageFail = function () {
  $('.message').removeClass('success')
  $('.message').addClass('failure')
}

const messageSuccess = function () {
  $('.message').removeClass('failure')
  $('.message').addClass('success')
}

// Sign the user up for a new account
const signUpSuccess = function (data) {
  $('.message').text('Sign up successfull')
  messageSuccess()
  // console.log(`signUpSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('.message').text('Sign up failed!')
  messageFail()
  // console.log(`signUpFailure ran. Error is:`, error)

  $('form').trigger('reset')
  return error
}

// Sign in an existing account
const signInSuccess = function (data) {
  $('.message').text('Sign in successfull')
  messageSuccess()
  // console.log(`signInSuccess ran. Data is:`, data)

  store.user = data.user

  $('.authenticated').show()
  $('.unauthenticated').hide()

  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('.message').text('Sign in failed!')
  messageFail()
  // console.log(`signInFailure ran. Error is:`, error)

  $('form').trigger('reset')
  return error
}

// Allows user to change their password
const changePasswordSuccess = function (data) {
  $('.message').text('Changed password successfully!')
  messageSuccess()
  // console.log(`changePasswordSuccess ran. Data is:`, data)

  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('.message').text('Change password failed!')
  messageFail()
  // console.log(`changePasswordFailure ran. Error is:`, error)

  $('form').trigger('reset')
  return error
}

// Sign the user out and change user to null
const signOutSuccess = function (data) {
  $('.message').text('Sign out successfull')
  messageSuccess()
  // console.log(`signOutSuccess ran. Data is:`, data)

  $('form').trigger('reset')

  $('.authenticated').hide()
  $('.unauthenticated').show()

  store.user = null
}

const signOutFailure = function (error) {
  $('.message').text('Error on sign out')
  messageSuccess()
  console.error('signOutFailure ran. Error is :', error)
}

const indexPostSuccess = (data) => {
  const indexPostHtml = indexPostTemplate({ posts: data.posts })
  $('.posts').html(indexPostHtml)
}

const createPostSuccess = (data) => {
  const indexPostHtml = indexPostTemplate({ posts: data.posts })
  $('.posts').html(indexPostHtml)
}

const findPostSuccess = (data) => {
  console.log(data)
  const indexPostHtml = indexPostTemplate({ posts: data.posts })
  $('.posts').html(indexPostHtml)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
  changePasswordFailure,
  indexPostSuccess,
  createPostSuccess,
  findPostSuccess
}
