/* global define */

define(['v/ui/base', 'jquery'], function (BaseUI, $) {
  'use strict'

  let Pane = function (id) {
    BaseUI.call(this)

    this.element = $(`<div id=${id}>`)

    let that = this
    setTimeout(function () {
      console.log('pane ready')
      that.emitEvent('ready')
    }, 100)
  }
  Pane.prototype = Object.create(BaseUI.prototype)
  Pane.prototype.constructor = Pane

  return Pane
})
