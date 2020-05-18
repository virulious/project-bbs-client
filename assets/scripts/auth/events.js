'use strict'

// getFormFields
const getFormFields = require('../../../lib/get-form-fields')

// UI and API
const api = require('./api')
const ui = require('./ui')
// const gameBoard = require('./gameBoard')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // Prevent the page from refreshing!
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onIndexPost = function (event) {
  event.preventDefault()
  api.indexPost()
    .then(ui.indexPostSuccess)
    .catch(console.error)
}

const onCreatePost = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createPost(formData)
    .then(api.indexPost)
    .then(ui.createPostSuccess)
    .catch(console.error)
}

const onFindPost = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const title = formData.posts.title

  api.findPost(title)
    .then(ui.findPostSuccess)
    .catch(console.error)
}

const onUpdatePost = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.updatePost(formData)
    .then(api.indexPost)
    .then(ui.updatePostSuccess)
    .catch(console.error)
}

const onDeletePost = (event) => {
  event.preventDefault()
  const postId = $(event.target).data('id')
  api.deletePost(postId)
    .then(function () {
      onIndexPost(event)
    })
    .catch(console.error)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onIndexPost,
  onCreatePost,
  onFindPost,
  onUpdatePost,
  onDeletePost
}
