/* global define */

define(['EventEmitter', 'jquery'], function (EventEmitter, $) {
  'use strict'

  let Windows = function () {
    control_window = window.open('empty.html')

    let that = this
    control_window.onload = function () {
      that.emitEvent('ready')
    }
  }
  Windows.prototype = Object.create(EventEmitter.prototype)
  Windows.prototype.constructor = Windows

  let control_window
  
  Windows.prototype.add = function (thing) {
    $(control_window.document.body).append(thing)
    this.emitEvent('added')
  }

  let windows = new Windows()
  return windows
})
