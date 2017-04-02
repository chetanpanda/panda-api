'use strict'

const SECOND = 1000

const CtrlContentManager = require('ctrl-content-manager')
const bodyParser = require('body-parser')
const feathers = require('feathers')
const rest = require('feathers-rest')
const socketio = require('feathers-socketio')

const endpoints = require('./endpoints')
const env = require('../env')

const cm = new CtrlContentManager({
  accessTokens: {
    preview: env.CONTENTFUL_PREVIEW_TOKEN
  , production: env.CONTENTFUL_PRODUCTION_TOKEN
  }
, fetchInterval: Number.parseInt(env.CONTENTFUL_FETCH_INTERVAL) * SECOND
, isProduction: env.NODE_ENV === 'production'
, parsing: {
    singles: [
      'globalElements'
    , 'pageHome'
    ]
  }
, space: env.CONTENTFUL_SPACE_ID
})

const app = feathers()

app.configure(rest())
app.configure(socketio())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/content', new endpoints.Content({cm}))

const content = app.service('/content')
cm.startFetchInterval((error, data) => content.update(null, data))

module.exports = app
