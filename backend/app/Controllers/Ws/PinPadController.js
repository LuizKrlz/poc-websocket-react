'use strict'

class PinPadController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = PinPadController
