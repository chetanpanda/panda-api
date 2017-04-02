'use strict'

class Content {
  constructor() {
    this.data = {}
    this.events = ['update']
  }

  find(params, callback) {
    callback(null, this.data)
  }

  update(id, data, callback) {
    this.data = data

    this.emit('update', this.data)

    return callback && callback(null, this.data)
  }
}

module.exports = Content
