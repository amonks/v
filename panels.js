/* global define */

define(['EventEmitter', 'jquery'], function (EventEmitter, $) {
  'use strict'

  let Panels = function () { EventEmitter.call(this) }
  Panels.prototype = Object.create(EventEmitter.prototype)
  Panels.prototype.constructor = Panels

  let control_panel

  Panels.prototype.init = function () {
    control_panel = $(window.document.body).append($('<div id="control-panel">'))

    let that = this
    // requeue to wait for ready listener
    setTimeout(function () {
      that.emitEvent('ready')
    }, 0)
  }

  Panels.prototype.add = function (thing) {
    control_panel.append(thing)
    this.emitEvent('added')
  }

  let panels = new Panels()
  return panels
})
