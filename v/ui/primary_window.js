/* global define */

define(['v/ui/base', 'jquery'], function (BaseUI, $) {
  'use strict'

  let PrimaryWindow = function () {
    console.log('instantiating primary window')
    BaseUI.call(this)

    this.window = window
    this.element = $('#v')
    this.element.html('')
    this.head = $(window.document.head)
    this.head.append($('<title>v</title>'))
    this.head.append($('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'))

    console.log('window ready')
    let that = this
    setTimeout(function () {
      that.emitEvent('ready')
    }, 0)
  }
  PrimaryWindow.prototype = Object.create(BaseUI.prototype)
  PrimaryWindow.prototype.constructor = PrimaryWindow

  return PrimaryWindow
})
