/* global define */

define(['v/ui/base', 'jquery'], function (BaseUI, $) {
  'use strict'

  let ExternalWindow = function (id) {
    BaseUI.call(this)

    this.window = window.open('v/empty', id)

    let that = this
    this.window.onload = function () {
      that.element = $(that.window.document.body)
      that.element.html('')
      that.head = $(that.window.document.head)
      that.head.append($('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'))

      console.log('window ready')
      that.emitEvent('ready')
    }
  }
  ExternalWindow.prototype = Object.create(BaseUI.prototype)
  ExternalWindow.prototype.constructor = ExternalWindow

  return ExternalWindow
})
