/* global define */

define(['EventEmitter', 'jquery'], function (EventEmitter, $) {
  'use strict'

  let Control = function (ui, id, options) {
    EventEmitter.call(this)
    let that = this

    ui.add($(`<div id="${id}" class="well"><h1>${id}</h1>`))
    // requeue to wait for ready listener
    setTimeout(function () {
      that.emitEvent('ready')
    }, 0)
  }

  Control.prototype = Object.create(EventEmitter.prototype)
  Control.prototype.constructor = Control

  return Control
})
