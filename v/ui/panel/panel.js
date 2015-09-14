/* global define */

define(function (require) {
  'use strict'

  let BaseUI = require('v/ui/base')
  let $ = require('jquery')
  let panel_hbs = require('hbs!v/ui/panel/panel')

  let Panel = function () {
    BaseUI.call(this)

    this.element = $(panel_hbs())

    let that = this
    setTimeout(function () {
      console.log('panel ready')
      that.emitEvent('ready')
    }, 0)
  }
  Panel.prototype = Object.create(BaseUI.prototype)
  Panel.prototype.constructor = Panel

  return Panel
})
