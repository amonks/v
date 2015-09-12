/* global define */

define(['v/ui/base', 'jquery'], function (BaseUI, $) {
  'use strict'

  let Windows = function () {
    control_window = window.open('empty.html')

    let that = this
    control_window.onload = function () {
      $(control_window.document.head).append($('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'))
      that.emitEvent('ready')
    }
  }
  Windows.prototype = Object.create(BaseUI.prototype)
  Windows.prototype.constructor = Windows

  let control_window

  Windows.prototype.add = function (thing) {
    $(control_window.document.body).append(thing)
    this.emitEvent('added')
  }

  let windows = new Windows()
  return windows
})
