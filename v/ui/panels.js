/* global define */

define(['v/ui/base', 'jquery'], function (BaseUI, $) {
  'use strict'

  let Panels = function () {
    BaseUI.call(this)
    control_panel = $(window.document.body).append($('<div id="control-panel">'))

    let that = this
    // requeue to wait for ready listener
    setTimeout(function () {
      console.log('ready')
      that.emitEvent('ready')
    }, 100)
  }
  Panels.prototype = Object.create(BaseUI.prototype)
  Panels.prototype.constructor = Panels

  let control_panel

  Panels.prototype.add = function (thing) {
    control_panel.append(thing)
    this.emitEvent('added')
  }

  let panels = new Panels()
  return panels
})
