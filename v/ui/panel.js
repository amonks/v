/* global define */

define(['v/ui/base', 'jquery', 'hbs!v/ui/panel'], function (BaseUI, $, panel_hbs) {
  'use strict'

  let Panel = function () {
    BaseUI.call(this)

    this.element = $(panel_hbs())

    let that = this
    setTimeout(function () {
      console.log('panel ready')
      that.emitEvent('ready')
    }, 100)
  }
  Panel.prototype = Object.create(BaseUI.prototype)
  Panel.prototype.constructor = Panel

  return Panel
})
