'use strict'

const bodyParser = require('body-parser')
const feathers = require('feathers')
const rest = require('feathers-rest')
const socketio = require('feathers-socketio')

const env = require('./lib/env')
const v1 = require('./lib/v1')

const app = feathers()

app.configure(rest())
app.configure(socketio())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/v1', v1)

app.listen(env.PORT)
