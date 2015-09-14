/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let BaseWindow = require('v/ui/window/base')

  let PrimaryWindow = function () {
    BaseWindow.call(this)

    this.win = window
    this.element = $('#v')
    this.render()
  }
  PrimaryWindow.prototype = Object.create(BaseWindow.prototype)
  PrimaryWindow.prototype.constructor = PrimaryWindow

  return PrimaryWindow
})
