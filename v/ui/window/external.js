/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let BaseWindow = require('v/ui/window/base')

  let ExternalWindow = function (id, options) {
    BaseWindow.call(this)

    this.win = window.open('v/empty.html', id, options)

    let that = this
    this.win.onload = function () {
      that.element = $(that.win.document.body)
      that.set_up()
    }
  }
  ExternalWindow.prototype = Object.create(BaseWindow.prototype)
  ExternalWindow.prototype.constructor = ExternalWindow

  return ExternalWindow
})
