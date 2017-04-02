'use strict'

const CtrlEnv = require('ctrl-env')

const ctrlEnv = new CtrlEnv([
  ['NODE_ENV', {prefixed: false}]
, ['PORT', {prefixed: false}]
, ['CONTENTFUL_PREVIEW_TOKEN']
, ['CONTENTFUL_PRODUCTION_TOKEN']
, ['CONTENTFUL_FETCH_INTERVAL']
, ['CONTENTFUL_SPACE_ID']
], {
  prefix: 'PANDA'
})

ctrlEnv.assert()

module.exports = ctrlEnv
