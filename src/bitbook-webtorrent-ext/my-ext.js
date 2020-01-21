var EventEmitter = require('events').EventEmitter
var compact2string = require('compact2string')
var bencode = require('bencode')

var PEX_INTERVAL = 65000 // just over one minute

module.exports = () => {
  class myExt extends EventEmitter {
    constructor (wire) {
      super()

      this._wire = wire
      this._intervalId = null

      this.reset()
    }

    /**
     * Start sending regular PEX updates to remote peer.
     */
    start (userData) {
      this.userData = userData;
      clearInterval(this._intervalId)
      this._intervalId = setInterval(() => this._sendMessage(), PEX_INTERVAL)
      if (this._intervalId.unref) this._intervalId.unref()
    }

    /**
     * Stop sending PEX updates to the remote peer.
     */
    stop () {
      clearInterval(this._intervalId)
      this._intervalId = null
    }

    /**
     * Stops sending updates to the remote peer and resets internal state of peers seen.
     */
    reset () {
      this.userData = undefined;
      this.stop()
    }

    onExtendedHandshake (handshake) {
      if (!handshake.m || !handshake.m.my_ext) {
        return this.emit('warning', new Error('Peer does not support my_ext'))
      }
        // TODO: May need to do the following: https://github.com/chr15m/bugout/commit/cd3cd895eebc2ba6d7375cb4e118f7877ee490b7
        // and remove sendMessage() from start().
    }

    /**
     *
     * @param {Buffer} buf bencoded dictionary
     */
    onMessage (buf) {
      var message

      try {
        message = bencode.decode(buf)
      } catch (err) {
        // drop invalid messages
        return
      }
    }

    /**
     * Sends a bitbook message to the remote peer having userdata
     */
    _sendMessage () {
      this._wire.extended('my_ext', {
        userData: this.userData
      })
    }
  }

  myExt.prototype.name = 'my_ext'

  return myExt
}