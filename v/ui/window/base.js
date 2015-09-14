/* global define */

define(function (require) {
  'use strict'

  let BaseUI = require('v/ui/base')
  let $ = require('jquery')

  let BaseWindow = function (id) {
    BaseUI.call(this)
  }

  BaseWindow.prototype = Object.create(BaseUI.prototype)
  BaseWindow.prototype.constructor = BaseWindow

  BaseWindow.prototype.set_up = function () {
    this.element.html('')
    this.element.addClass('container-fluid')
    this.head = $(this.win.document.head)
    this.head.append($('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'))
    this.head.append($('<link rel="stylesheet" href="/v/v.css">'))
    this.head.append($(`<title>v</title>`))
    let that = this
    setTimeout(function () {
      console.log('window ready')
      that.emitEvent('ready')
    }, 0)
  }

  return BaseWindow
})
