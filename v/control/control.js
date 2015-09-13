/* global define */

define(['EventEmitter', 'jquery', 'hbs!v/control/control'], function (EventEmitter, $, controlHbs) {
  'use strict'

  let Control = function (ui, id, options) {
    console.log('called control')
    EventEmitter.call(this)
    let that = this
    let x = controlHbs('hello')
    console.log(x)
    ui.add($(controlHbs({id: id})))
    // requeue to wait for ready listener
    setTimeout(function () {
      that.emitEvent('ready')
    }, 0)
  }

  Control.prototype = Object.create(EventEmitter.prototype)
  Control.prototype.constructor = Control

  return Control
})
