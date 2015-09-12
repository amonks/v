/* global define */

define(['EventEmitter'], function (EventEmitter) {
  'use strict'

  let BaseUI = function () {
    EventEmitter.call(this)
  }
  BaseUI.prototype = Object.create(EventEmitter.prototype)
  BaseUI.prototype.constructor = BaseUI

  return BaseUI
})
